import { AUTH_TOKEN } from 'utils/const/constants';

export const useAuth = (): boolean => {
    const token = localStorage.getItem(AUTH_TOKEN)
    if (token) {
        return true
    } else {
        return false
    }
}