export default async function PostUser(method = null, data = null, id = "") {
    try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
       return new Response({status:200})
    } catch (error) {
        console.error('Error updating user:', error);
    }
}
