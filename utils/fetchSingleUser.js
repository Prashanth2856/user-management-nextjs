export default async function fetchSingleUser(id, method = "GET") {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: method,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
