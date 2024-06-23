import Database from "better-sqlite3";
export const db = new Database("todos.db");

async function setupTable() {
	db.prepare(
		"CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY , name TEXT, status TEXT)"
	).run();
}

async function seedData() {
	const rows = db.prepare("SELECT COUNT(*) as count from todos").get();
	if (rows.count > 0) {
		console.log("There has existing data, skip seed data process.");
		return;
	}

	const query = db.prepare("INSERT INTO todos (name, status) VALUES (?, ?)");
	query.run("Install node.js", "OPEN");
	query.run("Install sqlite3", "OPEN");
}

export async function initDB() {
	await setupTable()
		.then(seedData)
		.then(() => console.log("DB setup successfully"))
		.catch((err) => console.log(err));
}
