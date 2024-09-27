"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ComponentInstanceIcon } from "@radix-ui/react-icons";
import { CoinsIcon } from "lucide-react";

const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1668487826892-bf471b01e5ed?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522426197515-ad17e39de88d?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519161720427-f7711f9efce3?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Pain reliever and fever reducer",
    price: 5,
    neededQuantity: 1000,
    imageUrl: imageUrls[0],
  },
  {
    id: 2,
    name: "Amoxicillin",
    description: "Antibiotic for bacterial infections",
    price: 10,
    neededQuantity: 500,
    imageUrl: imageUrls[1],
  },
  {
    id: 3,
    name: "Ibuprofen",
    description: "Nonsteroidal anti-inflammatory drug",
    price: 6,
    neededQuantity: 800,
    imageUrl: imageUrls[2],
  },
  {
    id: 4,
    name: "Omeprazole",
    description: "Proton pump inhibitor for acid reflux",
    price: 15,
    neededQuantity: 300,
    imageUrl: imageUrls[3],
  },
  {
    id: 5,
    name: "Metformin",
    description: "Oral diabetes medicine",
    price: 8,
    neededQuantity: 600,
    imageUrl: imageUrls[4],
  },
  {
    id: 6,
    name: "Lisinopril",
    description: "ACE inhibitor for high blood pressure",
    price: 12,
    neededQuantity: 400,
    imageUrl: imageUrls[5],
  },
  {
    id: 7,
    name: "Levothyroxine",
    description: "Thyroid hormone replacement",
    price: 20,
    neededQuantity: 200,
    imageUrl: imageUrls[0],
  },
  {
    id: 8,
    name: "Amlodipine",
    description: "Calcium channel blocker for hypertension",
    price: 9,
    neededQuantity: 550,
    imageUrl: imageUrls[1],
  },
  {
    id: 9,
    name: "Metoprolol",
    description: "Beta-blocker for heart conditions",
    price: 11,
    neededQuantity: 450,
    imageUrl: imageUrls[2],
  },
  {
    id: 10,
    name: "Gabapentin",
    description: "Anticonvulsant and nerve pain medication",
    price: 14,
    neededQuantity: 350,
    imageUrl: imageUrls[3],
  },
  {
    id: 11,
    name: "Sertraline",
    description: "SSRI antidepressant",
    price: 18,
    neededQuantity: 250,
    imageUrl: imageUrls[4],
  },
  {
    id: 12,
    name: "Albuterol",
    description: "Bronchodilator for asthma",
    price: 25,
    neededQuantity: 150,
    imageUrl: imageUrls[5],
  },
  {
    id: 13,
    name: "Losartan",
    description: "Angiotensin II receptor blocker for hypertension",
    price: 13,
    neededQuantity: 400,
    imageUrl: imageUrls[6],
  },
  {
    id: 14,
    name: "Metformin ER",
    description: "Extended-release diabetes medication",
    price: 16,
    neededQuantity: 300,
    imageUrl: imageUrls[7],
  },
  {
    id: 15,
    name: "Escitalopram",
    description: "SSRI for depression and anxiety",
    price: 22,
    neededQuantity: 200,
    imageUrl: imageUrls[8],
  },
];

const DonatePage = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(medicines.map((m) => [m.id, 0]))
  );
  const [isLoading, setIsLoading] = useState(false);

  const updateQuantity = (id: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + change),
    }));
  };

  const resetQuantities = () => {
    setQuantities(Object.fromEntries(medicines.map((m) => [m.id, 0])));
  };

  const total = medicines.reduce(
    (sum, medicine) => sum + quantities[medicine.id] * medicine.price,
    0
  );

  const handleDonate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const toastMessage = `Donation successful, you paid $${total.toFixed(2)}`;
      toast.success(toastMessage);
      resetQuantities();
    }, 1000);
  };

  return (
    <main className="grid place-items-center h-screen">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-center mb-8">
          Donate Medicines
        </h1>
        <div className="flex gap-4 items-center max-w-sm mx-auto mb-8">
          <div className="w-full h-[1px] bg-muted-foreground/50 "></div>
          <span>or</span>
          <div className="w-full h-[1px] bg-muted-foreground/50"></div>
        </div>
        <div className="text-center mb-8">
          <Button size="lg" className="font-semibold" asChild>
            <Link href="/donate/money" className="flex items-center gap-2">
              <CoinsIcon /> Donate Money Instead
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={medicine.imageUrl}
                  alt={medicine.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{medicine.name}</CardTitle>
                <CardDescription>{medicine.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold">
                  ${medicine.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Needed: {medicine.neededQuantity}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(medicine.id, -1)}
                >
                  -
                </Button>
                <span>{quantities[medicine.id]}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(medicine.id, 1)}
                >
                  +
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-background/10 backdrop-blur-sm p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Button variant="outline" onClick={resetQuantities}>
              Reset
            </Button>
            <span className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </span>
            <Button onClick={handleDonate} disabled={isLoading}>
              {isLoading ? "Processing..." : "Donate"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonatePage;
