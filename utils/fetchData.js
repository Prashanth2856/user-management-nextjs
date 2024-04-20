export default async function fetchUsers(page = "", pageSize = "") {
  try {
    const response = await fetch(
      `http://localhost:3000/api/users?page=${page}&pageSize=${pageSize}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
