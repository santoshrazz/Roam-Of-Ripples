export const runtime = "nodejs";

export async function POST() {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const { data, error } = await resend.emails.send({
      from: "RoamRipples <no-reply@roamripples.com>",
      to: ["santoshrajbgp11@gmail.com"],
      subject: "Hello world",
      html: "<h1>Hello</h1>",
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true, data });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
