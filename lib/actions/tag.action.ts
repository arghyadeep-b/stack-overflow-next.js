"use server";

import User from "@/database/user.model";
import { GetTopInteractedTagsParams } from "./shared.types";
import { connectToDatabase } from "../mongoose";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found!");

    // Find interactions for the user and group by tags...
    // Interactions...

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}