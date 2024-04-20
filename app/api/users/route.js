import connect from "@/config/db";
import User from "@/models/user";

// Get all the users
export const GET = async (req, res) => {
  try {
    await connect();

    const page = req.nextUrl.searchParams.get("page") || 1;
    const pageSize = req.nextUrl.searchParams.get("pageSize") || 5;
    const skip = (page - 1) * pageSize;
    const total = await User.countDocuments();

    const users = await User.find({}).skip(skip).limit(pageSize);
    return new Response(JSON.stringify({ total, users }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connect();
    const user = await req.json();
    await User.create(user);
    return Response.redirect("http://localhost:3000/users");
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
