import { useSelector } from 'react-redux';

export const useAuth = () => {
    const isAuthed = useSelector(state => state.auth.isAuthed);
    const roles = useSelector(state => state.auth.roles);

    return {
        isAuthed,
        roles: roles ?? [],
    };
};
