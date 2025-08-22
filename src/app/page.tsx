"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import BookingForm from "@/components/BookingForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { logoConfig } from "@/lib/logos";
import Image from "next/image";
import {
  Brain,
  Heart,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Lightbulb
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <WhatsAppWidget />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">TMF-Coaching</div>
            <div className="flex items-center gap-6">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Behandelingen</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">Over Michel</a>
              <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan Intake
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-blue-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-emerald-100 text-emerald-800">
              Wetenschappelijk onderbouwde hypnotherapie
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Overwin je <span className="text-emerald-600">angsten</span> en <span className="text-blue-600">verslavingen</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professionele hypnotherapie voor angst, fobieën, stoppen met roken, eetproblemen en trauma.
              Ervaren OMNI hypnotherapeut met bewezen resultaten in Breda en omgeving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Gratis Intake Plannen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = "tel:0763690248"}
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Bellen
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Gratis intake
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                OMNI gecertificeerd
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Bewezen resultaten
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Heb je last van oncontroleerbare gedachten of gedragingen?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Angst & Fobieën</h3>
                  <p className="text-slate-600 text-sm">Paniekaanvallen, sociale angst, vliegangst of specifieke fobieën die je leven beperken</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Verslavingen</h3>
                  <p className="text-slate-600 text-sm">Roken, overeten, drugs, alcohol of andere dwangmatige gedragingen</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50/50">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Trauma & Stress</h3>
                  <p className="text-slate-600 text-sm">Burnout, PTSD, emotionele blokkades of onverwerkte ervaringen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wetenschappelijk onderbouwde behandelingen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Met OMNI hypnotherapie pak ik de onderliggende oorzaken aan, niet alleen de symptomen.
              Klinisch bewezen effectief voor langdurige verandering.
            </p>
          </div>

          <Tabs defaultValue="anxiety" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="anxiety">Angst & Fobieën</TabsTrigger>
              <TabsTrigger value="addiction">Verslavingen</TabsTrigger>
              <TabsTrigger value="trauma">Trauma & PTSD</TabsTrigger>
              <TabsTrigger value="other">Overige klachten</TabsTrigger>
            </TabsList>

            <TabsContent value="anxiety" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-blue-600" />
                      Paniekaanvallen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Leer je lichaam en geest te kalmeren. Stop de cyclus van angst voor de angst.</p>
                    <Badge variant="secondary">3-6 sessies</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Sociale Angst
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Bouw zelfvertrouwen op en leer ontspannen te zijn in sociale situaties.</p>
                    <Badge variant="secondary">4-8 sessies</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      Specifieke Fobieën
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Vliegangst, spinnenfobie, hoogteangst - vaak opgelost in enkele sessies.</p>
                    <Badge variant="secondary">1-3 sessies</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="addiction" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      Stoppen met Roken
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Doorbreek de mentale en fysieke afhankelijkheid. Wordt definitief rookvrij.</p>
                    <Badge variant="secondary">2-4 sessies</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-orange-600" />
                      Eetproblemen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Emotioneel eten, binge eating, of ongezonde voedingspatronen aanpakken.</p>
                    <Badge variant="secondary">4-8 sessies</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      Andere Verslavingen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Alcohol, drugs, gokken of andere dwangmatige gedragingen.</p>
                    <Badge variant="secondary">6-12 sessies</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trauma" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      PTSD & Trauma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Veilige verwerking van traumatische ervaringen met regressietherapie.</p>
                    <Badge variant="secondary">6-15 sessies</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-600" />
                      Burnout & Stress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">Herstel je mentale balans en leer effectieve stresscoping strategieën.</p>
                    <Badge variant="secondary">4-10 sessies</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Slaapproblemen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Insomnia en slaapstoornissen</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Zelfvertrouwen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Boost je zelfwaardering en assertiviteit</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Gewoontes Doorbreken</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Nagelbijten, haarplukken en andere</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat klanten zeggen
            </h2>
            <p className="text-xl text-slate-600">Echte resultaten van echte mensen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">"Na een paar sessies heb ik geen last meer van mijn vliegangst en voel ik me weer vrij om de wereld te verkennen."</p>
                <div className="text-sm text-slate-500">Sarah, 34 jaar</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">"Ik was sceptisch, maar Michels professionele aanpak gaf me vertrouwen. Nu ben ik al zes maanden rookvrij."</p>
                <div className="text-sm text-slate-500">Mark, 42 jaar</div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">"Met hypnotherapie kwam ik eindelijk tot de kern van mijn stress en slaap ik weer beter."</p>
                <div className="text-sm text-slate-500">Lisa, 29 jaar</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hoe werkt het?
            </h2>
            <p className="text-xl text-slate-600">Van eerste contact tot duurzame verandering</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-slate-900 mb-2">Gratis Intake</h3>
                <p className="text-slate-600 text-sm">30 minuten kennismaken en je doelen bespreken</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-slate-900 mb-2">Behandelplan</h3>
                <p className="text-slate-600 text-sm">Persoonlijke aanpak gebaseerd op jouw situatie</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-slate-900 mb-2">Hypnose Sessies</h3>
                <p className="text-slate-600 text-sm">Professionele begeleiding naar je onderbewustzijn</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold text-slate-900 mb-2">Duurzaam Resultaat</h3>
                <p className="text-slate-600 text-sm">Blijvende verandering in je leven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Start vandaag met verandering
            </h2>
            <p className="text-xl text-slate-600">
              Plan een gratis intake en ontdek wat hypnotherapie voor jou kan betekenen
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Veelgestelde vragen
            </h2>
            <p className="text-xl text-slate-600">Alles wat je wilt weten over hypnotherapie</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Is hypnose veilig?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ja, hypnose is volledig veilig. Je behoudt altijd de controle en bent je bewust van wat er gebeurt.
                  Ik ben gecertificeerd OMNI hypnotherapeut en werk volgens strenge ethische richtlijnen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Hoeveel sessies heb ik nodig?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Dit verschilt per persoon en probleem. Eenvoudige fobieën kunnen vaak in 1-3 sessies worden opgelost,
                  terwijl complexere problemen zoals trauma 6-15 sessies kunnen vergen. We bespreken dit tijdens de intake.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Kan iedereen gehypnotiseerd worden?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ongeveer 95% van de mensen kan in hypnose gaan. Het vereist alleen je bereidheid om mee te werken.
                  Hypnose is een natuurlijke staat die je dagelijks ervaart, zoals bij dagdromen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Wat is het verschil met psychologie?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Hypnotherapie werkt direct met je onderbewustzijn waar gedragspatronen zijn opgeslagen.
                  Dit maakt verandering vaak sneller mogelijk dan traditionele gesprekstherapie.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Worden de kosten vergoed?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Sommige aanvullende verzekeringen vergoeden hypnotherapie. Check je polis of neem contact op met je verzekeraar.
                  Veel klanten vinden de investering het waard voor de levenslange voordelen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Michel Werneri
                </h2>
                <p className="text-xl text-slate-600 mb-6">
                  Gecertificeerd OMNI Hypnotherapeut met jarenlange ervaring in het helpen van mensen
                  bij het overwinnen van angsten, verslavingen en trauma's.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">OMNI Hypnosis Training Center gecertificeerd</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">Lid van GAT, CAT en andere beroepsorganisaties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">Voortdurende bijscholing in nieuwste technieken</span>
                  </div>
                </div>
                <p className="text-slate-600">
                  "Ik geloof in een veilige, respectvolle en resultaatgerichte aanpak. Mijn achtergrond
                  in coaching en hypnotherapie stelt mij in staat om jou te helpen blijvende veranderingen
                  te realiseren."
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-6"></div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                    <div className="text-slate-600">Succesvol behandelde klanten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar voor blijvende verandering?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Begin vandaag nog met jouw reis naar een leven zonder angst, verslavingen of beperkende overtuigingen.
            Plan een gratis intake en ontdek wat hypnotherapie voor jou kan betekenen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Plan Gratis Intake
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => window.location.href = "tel:0763690248"}
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel: 076-369-0248
            </Button>
          </div>
        </div>
      </section>

      {/* Improved Footer with Updated Logos */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">TMF-Coaching</h3>
              <p className="text-slate-400 mb-6">
                Professionele hypnotherapie in Breda voor angst, verslavingen en trauma.
              </p>

              {/* TMF Logo - Updated to use new logo config */}
              <div className="mb-6">
                <Image
                  src={logoConfig.tmfLogo.src}
                  alt={logoConfig.tmfLogo.alt}
                  width={logoConfig.tmfLogo.width}
                  height={logoConfig.tmfLogo.height}
                  className="rounded-lg"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-20 h-20 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ display: 'none' }}>
                  TMF
                </div>
                <p className="text-xs text-slate-400 mt-2">TMF-Coaching Logo</p>
              </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/michel-werneri/" className="text-slate-400 hover:text-white">LinkedIn</a>
                <a href="https://www.facebook.com/michel.werneri" className="text-slate-400 hover:text-white">Facebook</a>
                <a href="https://www.instagram.com/michel_a_w/" className="text-slate-400 hover:text-white">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Behandelingen</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/angst-behandeling" className="hover:text-white">Angst & Fobieën</a></li>
                <li><a href="/stoppen-met-roken" className="hover:text-white">Stoppen met Roken</a></li>
                <li><a href="/eetproblemen" className="hover:text-white">Eetproblemen</a></li>
                <li><a href="/trauma-ptsd" className="hover:text-white">Trauma & PTSD</a></li>
                <li><a href="/burnout-stress" className="hover:text-white">Burnout & Stress</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  076-369-0248
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  michel@tmf-coaching.nl
                </li>
                <li>Breda en omgeving</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Certificeringen</h4>
              <div className="space-y-4">
                {/* OMNI Logo - Updated */}
                <div className="flex items-center gap-3">
                  <Image
                    src={logoConfig.certifications.omni.src}
                    alt={logoConfig.certifications.omni.alt}
                    width={logoConfig.certifications.omni.width}
                    height={logoConfig.certifications.omni.height}
                    className="rounded-full bg-white p-1"
                    onError={(e) => {
                      // Fallback to old URL if new image not found
                      (e.target as HTMLImageElement).src = "https://www.hypnose.net/wp-content/uploads/2024/03/cropped-cropped-omni-logo.png";
                    }}
                  />
                  <span className="text-sm text-slate-400">{logoConfig.certifications.omni.name}</span>
                </div>

                {/* GAT Logo - Updated */}
                <div className="flex items-center gap-3">
                  <Image
                    src={logoConfig.certifications.gat.src}
                    alt={logoConfig.certifications.gat.alt}
                    width={logoConfig.certifications.gat.width}
                    height={logoConfig.certifications.gat.height}
                    className="rounded-full"
                    onError={(e) => {
                      // Fallback to old URL if new image not found
                      (e.target as HTMLImageElement).src = "https://vitaflow.nl/images/gat-2024.png";
                    }}
                  />
                  <span className="text-sm text-slate-400">{logoConfig.certifications.gat.name}</span>
                </div>

                {/* CAT Logo - Updated */}
                <div className="flex items-center gap-3">
                  <Image
                    src={logoConfig.certifications.cat.src}
                    alt={logoConfig.certifications.cat.alt}
                    width={logoConfig.certifications.cat.width}
                    height={logoConfig.certifications.cat.height}
                    className="rounded-full"
                    onError={(e) => {
                      // Fallback to old URL if new image not found
                      (e.target as HTMLImageElement).src = "https://edwinstolwijk.nl/wp-content/uploads/2025/06/cat_collectief_schild_2025.png";
                    }}
                  />
                  <span className="text-sm text-slate-400">{logoConfig.certifications.cat.name}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>&copy; 2024 TMF-Coaching. Alle rechten voorbehouden.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/algemene-voorwaarden" className="hover:text-white">Voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
