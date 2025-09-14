import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, Users, Phone, Mail, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner"
import reservationImage from "@/assets/food.jpg"

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM"
];

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "",
    specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!date || !formData.name || !formData.email || !formData.phone || !formData.time || !formData.guests) {
      toast("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success(`Your table for ${formData.guests} on ${format(date, "MMMM d, yyyy")} at ${formData.time} has been confirmed. A confirmation email has been sent to ${formData.email}.`)

    // Reset form
    setDate(undefined);
    setFormData({
      name: "",
      email: "",
      phone: "",
      time: "",
      guests: "",
      specialRequests: ""
    });

    setIsSubmitting(false);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservations" className="relative section-padding bg-background">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${reservationImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

      <div className="relative z-10 container-max">
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve Your Table
          </h2>
          <p data-aos="fade-right" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your unforgettable dining experience at Bella Vista. We look forward to welcoming you.
          </p>
        </div>

        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-white/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-display text-2xl text-primary">
                Make a Reservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-white">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2  text-white">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Enter your email"
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2  text-white">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2  text-white">
                      <CalendarIcon className="w-4 h-4" />
                      Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-secondary/50",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2  text-white">
                      <Clock className="w-4 h-4" />
                      Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
                      <SelectTrigger className="bg-secondary/50">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2  text-white">
                      <Users className="w-4 h-4" />
                      Number of Guests *
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => updateFormData("guests", value)}>
                      <SelectTrigger className="bg-secondary/50">
                        <SelectValue placeholder="Select party size" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests" className=" text-white">Special Requests</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => updateFormData("specialRequests", e.target.value)}
                  placeholder="Any dietary restrictions, special occasions, or other requests..."
                  className="bg-secondary/50 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full btn-gold text-lg py-6"
                >
                  {isSubmitting ? "Confirming Reservation..." : "Confirm Reservation"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reservations;