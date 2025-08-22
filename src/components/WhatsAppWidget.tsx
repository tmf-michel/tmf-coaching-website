"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "31763690248"; // Michel's phone number
  const message = "Hallo Michel, ik heb interesse in hypnotherapie en zou graag meer informatie willen. Kunnen we een gratis intake inplannen?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}

        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 mb-4">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Michel Werneri</h3>
                  <p className="text-xs opacity-90">OMNI Hypnotherapeut</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-green-400 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-3">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p className="mb-2">👋 Hallo! Bedankt voor je interesse in hypnotherapie.</p>
                <p className="mb-2">Ik ben Michel en help je graag bij:</p>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Angst & paniekaanvallen</li>
                  <li>• Stoppen met roken</li>
                  <li>• Fobieën & sociale angst</li>
                  <li>• Trauma & PTSD</li>
                  <li>• Eetproblemen</li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p>💬 Stuur me een WhatsApp bericht voor een <strong>gratis intake</strong> van 30 minuten!</p>
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat via WhatsApp
              </Button>

              <div className="text-xs text-center text-gray-500">
                Meestal reageer ik binnen 1 uur
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
