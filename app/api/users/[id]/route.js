import connect from "@/config/db";
import User from "@/models/user";

// Get single user
export const GET = async (req, res) => {
  try {
    await connect();
    const user = await User.findById(res.params.id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// Edit user
export const PUT = async (req, res) => {
  try {
    await connect();
    const userId = res.params.id;
    const user = await req.json();
    console.log(user);
    const updatedUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });
    return new Response(JSON.stringify({ message: "Successfully Updated" }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};

// Delete single user
export const DELETE = async (req, res) => {
  try {
    await connect();
    const user = await User.findByIdAndDelete(res.params.id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
