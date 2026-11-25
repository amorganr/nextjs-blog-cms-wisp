import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Alfredo](https://pbs.twimg.com/profile_images/2061655592607813632/mGiOHJhJ.jpg)

Primer párrafo borrado

Segundo párrafo borrado

![Alfredo](http://photos.google.com/archive/photo/AF1QipP5M9r13iCJvRyxqBzcfZ9dTHelzKW2iCCU6bmm)

Tercer párrafo borrado. Son cuatro líneas de texto tomando como referencia la vista en vs code con word wrap

Cuarto párrafo. Mismas cuatro líneas

Qunto párrafo

Let's go on an adventure!

With no love,

Alfredo`;

export async function generateMetadata() {
  return {
    title: "Sobre el autor",
    description: "Quién escribe estas líneas y por qué. Esa es la promesa, no necesariamente cierta",
    openGraph: {
      title: "Quién soy",
      description: "Quién escribe estas líneas y por qué. Esa es la promesa, no necesariamente cierta",
      images: [
        signOgImageUrl({
          title: "Alfredo",
          label: "Sobre el Autor",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
