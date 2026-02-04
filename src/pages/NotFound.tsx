import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <p className="label-uppercase mb-4">Error 404</p>
          <h1 className="heading-xl mb-6">Page Not Found</h1>
          <p className="body-lg text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
