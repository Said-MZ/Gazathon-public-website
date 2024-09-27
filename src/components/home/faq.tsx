import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faq = [
  {
    id: 1,
    question: "What is GazaDon?",
    answer:
      "GazaDon is a platform that helps hospitals in Gaza. it also helps people donate to them to get supplies and help them.",
  },
  {
    id: 2,
    question: "How can I donate?",
    answer: "You can donate by clicking the donate button on the homepage.",
  },
  {
    id: 3,
    question: "What is the purpose of GazaDon?",
    answer: "The purpose of GazaDon is to help the people of Gaza.",
  },
];

export const FAQ = () => (
  <div className="w-full py-20 lg:py-32 container p-2 mx-auto">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="default">FAQ</Badge>
          <div className="flex gap-2 flex-col max-w-3xl">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold">
              Common questions about us
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
              Discover the answers to the most common questions about our
              services
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full rounded-sm">
            {faq.map((question, index) => (
              <AccordionItem key={question.id} value={"index-" + index}>
                <AccordionTrigger
                  className={cn(
                    "hover:no-underline hover:bg-black/10 dark:hover:bg-white/10  px-2 py-4 md:text-xl text-left",
                    index === 0 ? "rounded-t-sm" : ""
                  )}
                >
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 py-4 md:text-lg text-muted-foreground">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
