import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();
  const contact_form_action = config.params.contact_form_action;

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
      </Head>
      <Header />
      {/* main contact section */}
      <section className="section">
        <div className="container max-w-[700px]">
          {markdownify(title, "h1", "h2 mb-8 text-center")}
          <form
            className="contact-form"
            method="POST"
            action={contact_form_action}
          >
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="name">
                Name
              </label>
              <input
                className="form-input w-full"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="email">
                Email
              </label>
              <input
                className="form-input w-full"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-input w-full"
                name="subject"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="message">
                Message
              </label>
              <textarea className="form-textarea w-full" rows="7" name="message" required />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit Now</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;