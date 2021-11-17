
import { Query } from '../';

interface IChirpsT {
    id: number;
    userid: number;
    content: string;
    location: string;
    create_at: Date;
    username: string;

}

const all = () => Query<IChirpsT[]>('SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid ORDER BY chirps.id DESC');

const one = (id: number) => Query<IChirpsT[]>('SELECT chirps.*, users.username FROM chirps JOIN users ON users.id = chirps.userid WHERE chirps.id = ?', [id]);

const insert = (userid: number, content: string) => Query<{ insertId: number }>('INSERT INTO chirps (userid, content) VALUE (?)', [[userid, content]]);

const update = (content: string, id: number) => Query('UPDATE chirps SET content = ? WHERE id = ?', [content, id]);

const destroy = (id: number) => Query<IChirpsT[]>('DELETE FROM chirps WHERE id = ?', [id]);

export default {
	all,
	one,
	insert,
	update,
	destroy
}
