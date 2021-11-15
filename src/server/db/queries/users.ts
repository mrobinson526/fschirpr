import { Query } from '../';

interface IUsersT {
    id?: number;
    username?: string;
    email?: string;
    created_at?: Date;
}
const all = <T = any>(columns: string[] = ['*']) => Query<T>('SELECT ?? FROM USERS', [columns]);
const insert = (values: any) => Query<{ insertID: number }>('INSERT INTO users (username, email, created_at');

export default {
    all,
    insert
};
