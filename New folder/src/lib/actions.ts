"use server";

export async function getNavItems() {
    const response = await fetch("http://localhost:8081/nav");
    return await response.json();
}