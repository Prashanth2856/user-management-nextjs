import connect from "@/config/db";
import User from "@/models/user";

// Get searched user
export const GET = async (req, res) => {
  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    if (!name) {
      return new Response("Name parameter is missing", { status: 400 });
    }

    const namePattern = new RegExp(name, "i");
    const query = { name: namePattern };
    const user = await User.find(query);
    // console.log(name);
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
