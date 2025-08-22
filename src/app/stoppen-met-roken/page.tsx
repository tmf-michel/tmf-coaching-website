"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BookingForm from "@/components/BookingForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  Heart,
  Cigarette,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  TrendingUp,
  Home,
  ArrowLeft,
  DollarSign,
  Clock
} from "lucide-react";

export default function StoppenMetRoken() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <WhatsAppWidget />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4" />
                Terug
              </Link>
              <div className="text-2xl font-bold text-slate-900">TMF-Coaching</div>
            </div>
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
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-emerald-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-red-100 text-red-800">
              Specialistisch programma stoppen met roken
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Definitief <span className="text-red-600">rookvrij</span> in <span className="text-emerald-600">2-4 sessies</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hypnotherapie is de meest effectieve methode om te stoppen met roken. Geen willekracht, geen vervangers,
              geen ontwenningsverschijnselen. Gewoon een rustige overgang naar een rookvrij leven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis Intake
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
                85% stopt definitief
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Geen ontwenning
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Snelle resultaten
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quit Smoking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Waarom nu stoppen met roken?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Elke dag die je rookt, tast je gezondheid verder aan. Maar het goede nieuws: je lichaam herstelt razendsnel.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Gezondheid</h3>
                  <p className="text-slate-600 text-sm">Hart- en vaatziekten, kanker, COPD voorkomen</p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Geld Besparen</h3>
                  <p className="text-slate-600 text-sm">€2000-€4000 per jaar besparen</p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200 bg-blue-50/50">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Energie</h3>
                  <p className="text-slate-600 text-sm">Meer energie, beter slapen, betere conditie</p>
                </CardContent>
              </Card>

              <Card className="text-center border-purple-200 bg-purple-50/50">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Vrijheid</h3>
                  <p className="text-slate-600 text-sm">Geen verslaving meer, geen social stigma</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Je lichaam herstelt binnen enkele uren
              </h2>
              <p className="text-xl text-slate-600">
                Zie hoe snel je lichaam zichzelf geneest na je laatste sigaret
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">20 minuten</h3>
                      <p className="text-slate-600">Hart- en bloeddruk dalen naar normaal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">12 uur</h3>
                      <p className="text-slate-600">Koolmonoxide uit je bloed verdwenen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">2 weken</h3>
                      <p className="text-slate-600">Bloedcirculatie verbetert, longfunctie neemt toe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">1 jaar</h3>
                      <p className="text-slate-600">Risico op hartziekten gehalveerd</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hypnotherapy Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Waarom hypnotherapie zo effectief is
              </h2>
              <p className="text-xl text-slate-600">
                Anders dan nicotinepleisters of willekracht pak ik de mentale verslaving aan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-red-100 rounded-full p-3 w-fit">
                      <Cigarette className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Doorbreekt de mental addiction</h3>
                  <p className="text-slate-600 mb-4">
                    Roken is voor 90% mentale gewoonte. Via hypnose herprogrammeren we je onderbewuste triggers
                    en associaties met roken.
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Geen trek meer na koffie/alcohol</li>
                    <li>• Stress triggers verdwijnen</li>
                    <li>• Sociale rook-impulsen stoppen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-emerald-100 rounded-full p-3 w-fit">
                      <Heart className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Installeert nieuwe gewoontes</h3>
                  <p className="text-slate-600 mb-4">
                    We vervangen je rookgewoontes door gezondere alternatieven die je onderbewustzijn
                    automatisch gaat kiezen.
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Diep ademhalen bij stress</li>
                    <li>• Water drinken ipv roken</li>
                    <li>• Gezonde snacks kiezen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-blue-100 rounded-full p-3 w-fit">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Vermindert ontwenningsverschijnselen</h3>
                  <p className="text-slate-600 mb-4">
                    Door ontspanning en positieve suggesties ervaart 85% van mijn klanten geen
                    of minimale ontwenningsverschijnselen.
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Geen extreme irritatie</li>
                    <li>• Slaap blijft normaal</li>
                    <li>• Gewichtstoename wordt voorkomen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-purple-100 rounded-full p-3 w-fit">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Versterkt je motivatie</h3>
                  <p className="text-slate-600 mb-4">
                    Hypnose versterkt je intrinsieke motivatie om rookvrij te zijn en herinnert je
                    aan alle voordelen van niet-roken.
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Trots op jezelf zijn</li>
                    <li>• Meer zelfvertrouwen</li>
                    <li>• Positieve identiteit als niet-roker</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Succesverhalen van ex-rokers
              </h2>
              <p className="text-xl text-slate-600">
                Lees hoe anderen definitief zijn gestopt
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Mark, 42 jaar - 20 jaar gerookt</h3>
                      <p className="text-slate-700 mb-4">
                        "Ik rookte 20 jaar lang een pakje per dag. Geprobeerd met pleisters, kauwgum, willekracht -
                        niets werkte langer dan een paar weken. Na 3 sessies met Michel ben ik al 8 maanden rookvrij
                        en heb geen enkele trek meer gehad!"
                      </p>
                      <Badge className="bg-red-100 text-red-800">3 sessies • 20 jaar roker • 8 maanden rookvrij</Badge>
                    </div>
                    <div className="md:w-1/3 bg-red-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600">€2.400</div>
                      <div className="text-sm text-red-600">al bespaard</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Sandra, 35 jaar - Stress roker</h3>
                      <p className="text-slate-700 mb-4">
                        "Ik rookte vooral bij stress en na het eten. Michel hielp me andere manieren te vinden
                        om met stress om te gaan. Nu drink ik thee en doe ademhalingsoefeningen. Veel effectiever
                        en gezonder!"
                      </p>
                      <Badge className="bg-emerald-100 text-emerald-800">2 sessies • Stress roker • 6 maanden rookvrij</Badge>
                    </div>
                    <div className="md:w-1/3 bg-emerald-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-600">10kg</div>
                      <div className="text-sm text-emerald-600">minder gewicht</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Peter, 55 jaar - 30 jaar gerookt</h3>
                      <p className="text-slate-700 mb-4">
                        "Na een hartaanval wist ik dat ik moest stoppen, maar ik kon het niet. De hypnose gaf me
                        de kracht die ik nodig had. Mijn cardioloog is verbaasd over mijn snelle herstel!"
                      </p>
                      <Badge className="bg-blue-100 text-blue-800">4 sessies • 30 jaar roker • Hart gezondheid</Badge>
                    </div>
                    <div className="md:w-1/3 bg-blue-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600">50%</div>
                      <div className="text-sm text-blue-600">beter hart risico</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Begin vandaag met je rookvrije leven
            </h2>
            <p className="text-xl text-slate-600">
              Plan een gratis intake en ontdek hoe makkelijk stoppen met roken kan zijn
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">TMF-Coaching</h3>
              <p className="text-slate-400 mb-4">
                Gespecialiseerd in hypnotherapie voor stoppen met roken in Breda en omgeving.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Andere Behandelingen</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/angst-behandeling" className="hover:text-white">Angst & Fobieën</Link></li>
                <li><Link href="/eetproblemen" className="hover:text-white">Eetproblemen</Link></li>
                <li><Link href="/trauma-ptsd" className="hover:text-white">Trauma & PTSD</Link></li>
                <li><Link href="/burnout-stress" className="hover:text-white">Burnout & Stress</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  076-369-0248
                </li>
                <li>michel@tmf-coaching.nl</li>
                <li>Breda en omgeving</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>&copy; 2024 TMF-Coaching. Alle rechten voorbehouden.</p>
            <Link href="/" className="flex items-center gap-2 hover:text-white mt-4 md:mt-0">
              <Home className="w-4 h-4" />
              Terug naar hoofdpagina
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
