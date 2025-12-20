import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CourseCard from "@/components/CourseCard";
import { COURSES, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CursosDisponiveis = () => {
  const categories = [...new Set(COURSES.map((course) => course.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCourses = selectedCategory
    ? COURSES.filter((course) => course.category === selectedCategory)
    : COURSES;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Cursos <span className="text-gold">Disponíveis</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Escolha entre mais de 50 cursos de graduação e pós-graduação.
              Todos com documentação reconhecida pelo MEC.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border sticky top-[104px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <p className="text-muted-foreground">
                Mostrando {filteredCourses.length} cursos
                {selectedCategory && ` em ${selectedCategory}`}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  name={course.name}
                  icon={course.icon}
                  category={course.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Não encontrou o curso que procura?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato conosco! Trabalhamos com uma ampla variedade de
              cursos e podemos ajudar você a encontrar exatamente o que precisa.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                📱 Falar com a Equipe
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CursosDisponiveis;