import { useEffect } from 'react';
import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  useEffect(() => {
    // Redirect to form.html when the component mounts
    window.location.href = '/form.html';
  }, []);

  return null; // No need to render anything in this component
};

export default Contact;