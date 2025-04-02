/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { ICompany } from "../types/company";
import { IContract } from "../types/contract";

const API_BASE_URL = "https://test-task-api.allfuneral.com";

const apiFetch = async <T>(
    endpoint: string,
    method: string = "GET",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any = null,
    token: string = ""
): Promise<T> => {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const options: RequestInit = { method, headers };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            throw new Error(
                `Error: ${response.status} - ${response.statusText}`
            );
        }

        return response.json();
    } catch (error) {
        console.error("Error during fetch:", error);
        throw error;
    }
};

export const getAuthToken = async (username: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/auth?user=${username}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(
            `Ошибка авторизации: ${response.status} - ${response.statusText}`
        );
    }

    const authHeader = response.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error(
            "Ошибка: отсутствует заголовок Authorization или он некорректен"
        );
    }

    return authHeader.split(" ")[1];
};

export const getCompany = async (
    companyId: string,
    token: string
): Promise<ICompany> => {
    return await apiFetch<ICompany>(
        `/companies/${companyId}`,
        "GET",
        null,
        token
    );
};

export const updateCompany = async (
    companyId: string,
    data: Partial<ICompany>,
    token: string
): Promise<ICompany> => {
    return await apiFetch<ICompany>(
        `/companies/${companyId}`,
        "PATCH",
        data,
        token
    );
};

export const deleteCompany = async (companyId: string, token: string) => {
    await fetch(`${API_BASE_URL}/companies/${companyId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};

export const uploadCompanyImage = async (
    companyId: string,
    file: File,
    token: string
): Promise<{
    name: string;
    filepath: string;
    thumbpath: string;
    createdAt: string;
}> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        `${API_BASE_URL}/companies/${companyId}/image`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Убираем Content-Type
            },
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
};

export const deleteCompanyImage = async (
    companyId: string,
    photoName: string,
    token: string
) => {
    await fetch(`${API_BASE_URL}/companies/${companyId}/image/${photoName}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getContract = async (
    contactId: string,
    token: string
): Promise<IContract> => {
    return await apiFetch<IContract>(
        `/contacts/${contactId}`,
        "GET",
        null,
        token
    );
};

export const updateContract = async (
    contactId: string,
    data: Partial<IContract>,
    token: string
): Promise<IContract> => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data), // Сериализуем объект в строку JSON
    });

    if (!response.ok) {
        throw new Error(`Error during update: ${response.statusText}`);
    }

    const responseData: IContract = await response.json();

    return responseData;
};
