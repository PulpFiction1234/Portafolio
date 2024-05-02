import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        La pagina no existe porfavor vuelve a <Link href="/">Inicio</Link>
      </p>
    </div>
  </Layout>
);

export default custom404;