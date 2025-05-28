import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Baby, Heart, HandHeart, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="p-4 md:p-10 max-w-6xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <HandHeart className="w-12 h-12 mx-auto text-purple-600" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-700">Love & Latch</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Empowering parents together — expert-led antenatal and infant feeding support in North Hertfordshire and online.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Book a Consultation</Button>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img src="/images/midwife-profile.jpg" alt="Steph" className="rounded-2xl shadow-lg" />
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-700">Meet Steph</h2>
          <p>
            Steph is a registered midwife and infant feeding specialist, qualified since 2020. Based in North Hertfordshire, she provides expert, practical support to families locally and online.
          </p>
          <p>
            Partner-inclusive antenatal classes are a key feature — because parenting is a team effort.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-700 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2 text-center">
              <Baby className="mx-auto text-purple-600" size={32} />
              <h3 className="font-bold text-lg">Couples Antenatal Classes</h3>
              <p>Engaging, inclusive birth and baby preparation sessions led by Steph and her husband, Lewis — because partners matter too.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2 text-center">
              <Heart className="mx-auto text-purple-600" size={32} />
              <h3 className="font-bold text-lg">Feeding Support</h3>
              <p>Expert help with breastfeeding, bottle feeding, expressing and combination feeding — online or in person.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2 text-center">
              <Calendar className="mx-auto text-purple-600" size={32} />
              <h3 className="font-bold text-lg">1:1 Consultations</h3>
              <p>Personalised support sessions tailored to your parenting journey, from birth plans to latch checks.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events Carousel */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-700 text-center">Upcoming Classes & Events</h2>
        <Carousel className="relative">
          <CarouselContent className="flex gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <CarouselItem key={i} className="basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Class Title {i + 1}</h3>
                    <p className="text-sm text-gray-500">Date & Time {i + 1}</p>
                    <p>Brief description of class {i + 1} here, tailored for expectant parents.</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">Book</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-700 text-center">What Parents Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4 italic text-gray-700">
              "Steph’s support was a total game-changer for our breastfeeding journey. Her calm, knowledgeable guidance made all the difference."
              <p className="text-right mt-2 font-semibold">— Emily R.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 italic text-gray-700">
              "We loved the antenatal classes — having Lewis there made it so much more engaging for me as a dad. Highly recommend!"
              <p className="text-right mt-2 font-semibold">— James T.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-700 text-center">FAQs</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Do you offer online support?</h3>
              <p>Yes — consultations and feeding support are available online if you're not based in North Hertfordshire.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">What topics do antenatal classes cover?</h3>
              <p>We cover birth preparation, feeding plans, newborn care, and how to support one another as a parenting team.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-purple-50 p-6 rounded-2xl shadow-md text-center space-y-4">
        <h2 className="text-2xl font-semibold text-purple-700">Get In Touch</h2>
        <p>
          Ready to book or have a question? Email us at{' '}
          <a href="mailto:hello@loveandlatch.co.uk" className="text-purple-700 font-medium underline">hello@loveandlatch.co.uk</a>
        </p>
        <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-100">
          Send a Message
        </Button>
      </section>
    </main>
  );
}
