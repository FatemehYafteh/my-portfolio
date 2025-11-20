import Link from "next/link";

export default function ProjectsPage() {
  const projectList = [
    { id: 1, title: "Portfolio Website", description: "A modern portfolio built with Next.js and Tailwind CSS.", slug: "portfolio-website" },
    { id: 2, title: "E-commerce App", description: "Online store with React and Stripe.", slug: "ecommerce-app" },
    { id: 3, title: "Dashboard UI", description: "Interactive admin dashboard with charts and tables.", slug: "dashboard-ui" },
  ];

  return (
    <div className="section px-6 max-w-5xl mx-auto">
      <h1 className="heading text-center mb-12">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map(project => (
          <div key={project.id} className="card hover:shadow-xl transition">
            <h3 className="text-xl font-bold  mb-3">{project.title}</h3>
            <p className="text-secondary ">{project.description}</p>
            <Link href={`/projects/${project.slug}`} className="btn-primary mt-6 block text-center">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
