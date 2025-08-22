"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BookingForm from "@/components/BookingForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  Brain,
  Heart,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  Users,
  Home,
  ArrowLeft
} from "lucide-react";

export default function AngstBehandeling() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800">
              Gespecialiseerd in angst & fobieën
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Bevrijding van <span className="text-blue-600">angst</span> en <span className="text-emerald-600">fobieën</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hypnotherapie biedt een krachtige en bewezen methode om paniekaanvallen, sociale angst,
              vliegangst en specifieke fobieën definitief te overwinnen. Vaak al effectief binnen 1-6 sessies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
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
                95% succeesratio
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Vaak snel resultaat
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Duurzame oplossing
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
              Herken je deze situaties?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="text-left border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <Brain className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-3">Paniekaanvallen</h3>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Plotseling hartkloppingen en zweten</li>
                    <li>• Gevoel van verstikking of duizeligheid</li>
                    <li>• Intense angst om dood te gaan</li>
                    <li>• Vermijden van situaties uit angst voor aanvallen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left border-orange-200 bg-orange-50/50">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-3">Sociale Angst</h3>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Blozen, beven of zweten in gezelschap</li>
                    <li>• Angst om beoordeeld of afgewezen te worden</li>
                    <li>• Vermijden van sociale gebeurtenissen</li>
                    <li>• Moeite met presentaties of gesprekken</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left border-purple-200 bg-purple-50/50">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-3">Specifieke Fobieën</h3>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Vliegangst - niet kunnen vliegen</li>
                    <li>• Spinnenfobie, slangen-, honden- of andere dierenfobieën</li>
                    <li>• Hoogteangst of angst voor liften</li>
                    <li>• Medische fobieën (naalden, bloed, tandarts)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left border-blue-200 bg-blue-50/50">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-3">Generalized Anxiety</h3>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Constant piekeren en ongerustheid</li>
                    <li>• Slaapproblemen door angstgedachten</li>
                    <li>• Fysieke spanning en vermoeidheid</li>
                    <li>• Moeite met concentreren en beslissingen nemen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Hypnotherapy Helps */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Hoe hypnotherapie angst effectief behandelt
              </h2>
              <p className="text-xl text-slate-600">
                Wetenschappelijk bewezen aanpak die werkt op de diepste niveaus van je onderbewustzijn
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Brain className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Directe toegang tot het onderbewustzijn</h3>
                      <p className="text-slate-600 mb-4">
                        Angst wordt vaak gevoed door onderbewuste patronen en automatische reacties. Hypnose geeft direct toegang
                        tot deze diepere lagen van je geest, waar de echte verandering kan plaatsvinden.
                      </p>
                      <p className="text-slate-600">
                        Anders dan bij gewone gesprektherapie, kunnen we tijdens hypnose de bron van je angst aanpakken
                        zonder dat je kritische geest tussenkomt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <Shield className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Hercodering van angstreacties</h3>
                      <p className="text-slate-600 mb-4">
                        Door regressietechnieken gaan we terug naar de oorsprong van je angst - vaak een vergeten gebeurtenis
                        of opgebouwde gevoeligheid. We 'herprogrammeren' je reactie op deze triggers.
                      </p>
                      <p className="text-slate-600">
                        Je leert nieuwe, rustiger responsen op situaties die voorheen angst opriepen.
                        Deze verandering is vaak permanent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Opbouw van zelfvertrouwen</h3>
                      <p className="text-slate-600 mb-4">
                        Hypnose versterkt je natuurlijke vermogen om met stress en uitdagingen om te gaan.
                        We bouwen nieuwe neurale paden op die rust en vertrouwen bevorderen.
                      </p>
                      <p className="text-slate-600">
                        Je ontwikkelt praktische technieken die je kunt gebruiken wanneer je ze nodig hebt,
                        zelfs buiten de therapiesessies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Jouw weg naar een angstvrij leven
              </h2>
              <p className="text-xl text-slate-600">
                Een gepersonaliseerde aanpak afgestemd op jouw specifieke angsten
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Uitgebreide Intake</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    We bespreken je specifieke angsten, triggers en doelen. Ik leg uit hoe hypnose werkt en stel een behandelplan op.
                  </p>
                  <Badge variant="secondary">60 minuten • Gratis</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Hypnose Sessies</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Gerichte hypnotherapie om angstpatronen te doorbreken en nieuwe, rustiger responsen te installeren.
                  </p>
                  <Badge variant="secondary">1-6 sessies • 90 min</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Nazorg & Tools</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Je krijgt zelfhypnose-technieken en praktische tools om je nieuwe rust en vertrouwen te behouden.
                  </p>
                  <Badge variant="secondary">Levenslang beschikbaar</Badge>
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
                Succesverhalen van mijn klanten
              </h2>
              <p className="text-xl text-slate-600">
                Echte mensen, echte resultaten
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Sarah, 34 jaar - Vliegangst</h3>
                      <p className="text-slate-700 mb-4">
                        "Ik had 15 jaar niet gevlogen vanwege extreme vliegangst. Na slechts 2 sessies met Michel
                        kon ik weer ontspannen een vliegtuig in. Vorige maand heb ik voor het eerst in jaren
                        een vakantie naar het buitenland geboekt!"
                      </p>
                      <Badge className="bg-blue-100 text-blue-800">2 sessies • Vliegangst • 100% succesvol</Badge>
                    </div>
                    <div className="md:w-1/3 bg-blue-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600">2</div>
                      <div className="text-sm text-blue-600">sessies</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Marcus, 28 jaar - Sociale Angst</h3>
                      <p className="text-slate-700 mb-4">
                        "Presentaties op werk waren een nachtmerrie. Ik bloosde, trilde en kon nauwelijks praten.
                        Na 4 sessies hypnotherapie geef ik nu vol vertrouwen presentaties en heb ik zelfs
                        een promotie gekregen!"
                      </p>
                      <Badge className="bg-emerald-100 text-emerald-800">4 sessies • Sociale angst • Carrière boost</Badge>
                    </div>
                    <div className="md:w-1/3 bg-emerald-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-600">4</div>
                      <div className="text-sm text-emerald-600">sessies</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Lisa, 42 jaar - Paniekaanvallen</h3>
                      <p className="text-slate-700 mb-4">
                        "Maandenlang dagelijkse paniekaanvallen maakten mijn leven onleefbaar. Dankzij Michel's
                        aanpak heb ik al 8 maanden geen enkele aanval meer gehad. Ik voel me eindelijk weer vrij!"
                      </p>
                      <Badge className="bg-purple-100 text-purple-800">6 sessies • Paniekaanvallen • 8+ maanden vrij</Badge>
                    </div>
                    <div className="md:w-1/3 bg-purple-100 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-600">6</div>
                      <div className="text-sm text-purple-600">sessies</div>
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
              Begin vandaag met jouw bevrijding van angst
            </h2>
            <p className="text-xl text-slate-600">
              Plan een gratis intake en ontdek hoe hypnotherapie jouw leven kan veranderen
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
                Gespecialiseerd in hypnotherapie voor angst, fobieën en verslavingen in Breda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Andere Behandelingen</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/stoppen-met-roken" className="hover:text-white">Stoppen met Roken</Link></li>
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
