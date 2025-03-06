import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/banner.jpg"
            alt="Temple Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Maa Karma
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience divine blessings and spiritual guidance at our sacred temple
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
            <Button size="lg">
              Book a Puja
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Puja Services</CardTitle>
              <CardDescription>
                Traditional Hindu worship ceremonies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience the divine energy through our various puja services, including daily aartis, special ceremonies, and festival celebrations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Astrology</CardTitle>
              <CardDescription>
                Vedic astrology consultations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get personalized astrological guidance from our experienced astrologers to understand your life's journey.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spiritual Guidance</CardTitle>
              <CardDescription>
                Personal spiritual counseling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive spiritual guidance and support from our knowledgeable priests and spiritual advisors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Temple Features */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-semibold mb-2">Sacred Space</h3>
              <p className="text-muted-foreground">
                Experience peace in our beautifully maintained temple premises
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🦳</div>
              <h3 className="font-semibold mb-2">Expert Priests</h3>
              <p className="text-muted-foreground">
                Learn from experienced and knowledgeable spiritual guides
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-semibold mb-2">Festival Celebrations</h3>
              <p className="text-muted-foreground">
                Join us in celebrating all major Hindu festivals
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Be part of our growing spiritual community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 