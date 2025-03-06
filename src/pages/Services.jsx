import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'

const Services = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/services-banner.jpg"
            alt="Temple Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our comprehensive range of spiritual services
          </p>
        </div>
      </section>

      {/* Puja Services */}
      <section id="puja">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Puja Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Daily Aarti</CardTitle>
                <CardDescription>
                  Morning and evening prayers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join us for daily morning and evening aartis, where we offer prayers
                  and seek blessings from the divine.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Pujas</CardTitle>
                <CardDescription>
                  Customized worship ceremonies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Book special pujas for various occasions like birthdays, anniversaries,
                  or to fulfill specific wishes.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Festival Celebrations</CardTitle>
                <CardDescription>
                  Major Hindu festivals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Participate in grand celebrations of major Hindu festivals with
                  special pujas and cultural programs.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Astrology Services */}
      <section id="astrology" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Astrology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Birth Chart Analysis</CardTitle>
                <CardDescription>
                  Detailed astrological reading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get a comprehensive analysis of your birth chart, including planetary
                  positions, strengths, and areas for growth.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Consultation</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Muhurta</CardTitle>
                <CardDescription>
                  Auspicious timing selection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consult our astrologers to determine the most auspicious timing for
                  important events and ceremonies.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Consultation</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Spiritual Guidance */}
      <section id="consultation">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Spiritual Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Personal Counseling</CardTitle>
                <CardDescription>
                  One-on-one spiritual guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive personalized spiritual guidance from our experienced priests
                  and spiritual advisors to help you on your spiritual journey.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Schedule Session</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meditation Classes</CardTitle>
                <CardDescription>
                  Learn meditation techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join our regular meditation classes to learn various meditation
                  techniques and experience inner peace.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Classes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 