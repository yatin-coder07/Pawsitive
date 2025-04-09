"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPost = async (
  state: any,
  form: FormData,
  
) => {
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const {breed,age,city,location,Ownername,ownerdetails,dogdescription,link } = Object.fromEntries(
    Array.from(form)
  );

  const slug = slugify(location as string, { lower: true, strict: true });

  try {
    const adoption = {
      breed,
      age,
      dogdescription,
      Ownername,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      city,
      location,
      ownerdetails
    };

    const result = await writeClient.create({ _type: "dogs", ...adoption });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};