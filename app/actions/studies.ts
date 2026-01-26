"use server";

export interface SearchFilters {
    query?: string;
    phase?: string[];
    status?: string[];
    condition?: string;
}

const API_BASE_URL = "https://api.clinicaltrials.lat/estudios";

export async function getStudies(filters: SearchFilters = {}) {
    try {
        const params = new URLSearchParams();
        if (filters.query) params.append("q", filters.query);
        if (filters.phase && filters.phase.length > 0) {
            filters.phase.forEach((p: string) => params.append("phase", p));
        }
        if (filters.status && filters.status.length > 0) {
            filters.status.forEach((s: string) => params.append("status", s));
        }

        const url = `${API_BASE_URL}${params.toString() ? `?${params.toString()}` : ""}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const results = await response.json();
        return results;

    } catch (error) {
        console.error("Error fetching studies from API:", error);
        return [];
    }
}

export async function getStudyById(id: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);

        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error(`API error: ${response.status}`);
        }

        const study = await response.json();
        return study;
    } catch (error) {
        console.error("Error fetching study by ID from API:", error);
        return null;
    }
}
