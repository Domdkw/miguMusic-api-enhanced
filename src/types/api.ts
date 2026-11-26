export interface ApiResponse<T = unknown> {
    code: string;
    info: string;
    data: T;
}

export interface RouteResponse<T = unknown> extends ApiResponse<T> {
    success: boolean;
}