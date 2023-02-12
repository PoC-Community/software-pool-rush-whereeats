export interface RegisterFormDTO {
	userId: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	createdAt: string;
	favoriteStoreIds: string[];
	isRetailer: boolean;
	retailerStoreId: string;
}

export interface LoginForm {
	email: string;
	password: string;
}

export type UserRegisterFormData = Pick<RegisterFormDTO, 'email' | 'password'>;
