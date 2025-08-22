"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, Phone, Mail } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
    preferred_contact: "email"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would submit to backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-emerald-50 border-emerald-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            Bedankt voor je aanmelding!
          </h3>
          <p className="text-emerald-700 mb-6">
            Ik neem binnen 24 uur contact met je op om een gratis intake in te plannen.
            Check ook je spam/junk folder voor een bevestiging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => window.location.href = "tel:0763690248"}
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Direct Bellen
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = "mailto:michel@tmf-coaching.nl"}
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Sturen
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6 text-emerald-600" />
          Plan je Gratis Intake
        </CardTitle>
        <CardDescription>
          Volledig vrijblijvend kennismakingsgesprek van 30 minuten
        </CardDescription>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            100% Gratis
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            30 minuten
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Geen verplichtingen
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Naam *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Je volledige naam"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="je@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefoon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issue">Waar wil je hulp bij? *</Label>
            <select
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Selecteer je hoofdklacht</option>
              <option value="angst">Angst & Paniekaanvallen</option>
              <option value="fobien">Specifieke Fobieën (vliegen, spinnen, etc.)</option>
              <option value="sociale-angst">Sociale Angst</option>
              <option value="roken">Stoppen met Roken</option>
              <option value="eetproblemen">Eetproblemen & Gewichtsbeheersing</option>
              <option value="drugs">Drugs & Alcohol</option>
              <option value="trauma">Trauma & PTSD</option>
              <option value="burnout">Burnout & Stress</option>
              <option value="slaap">Slaapproblemen</option>
              <option value="zelfvertrouwen">Zelfvertrouwen</option>
              <option value="anders">Iets anders</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Vertel kort over je situatie</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Bijvoorbeeld: Hoe lang heb je er last van? Wat heb je al geprobeerd? Wat is je doel?"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Hoe neem ik het beste contact met je op?</Label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="preferred_contact"
                  value="email"
                  checked={formData.preferred_contact === "email"}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-600"
                />
                <span className="text-sm">Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="preferred_contact"
                  value="phone"
                  checked={formData.preferred_contact === "phone"}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-600"
                />
                <span className="text-sm">Telefoon</span>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
            <Calendar className="w-5 h-5 mr-2" />
            Plan Gratis Intake
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Door dit formulier in te vullen ga je akkoord met het opslaan van je gegevens voor contactdoeleinden.
            Je gegevens worden niet gedeeld met derden.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
