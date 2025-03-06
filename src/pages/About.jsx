import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="About Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Maa Karma
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A sacred space for spiritual growth and divine connection
          </p>
        </div>
      </section>

      {/* History Section */}
      <section>
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Maa Karma Temple was established in 2010 with a vision to create a spiritual haven
                for devotees seeking divine guidance and blessings. What started as a small prayer
                hall has grown into a full-fledged temple complex serving thousands of devotees.
              </p>
              <p>
                Our temple is dedicated to various Hindu deities, with the main deity being
                Maa Durga. The temple complex includes separate shrines for other deities,
                meditation halls, and spaces for spiritual gatherings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide a sacred space where devotees can connect with the divine,
                  receive spiritual guidance, and experience inner peace through traditional
                  Hindu practices and modern spiritual approaches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a leading spiritual center that preserves and promotes Hindu
                  culture and traditions while fostering spiritual growth and community
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Temple Committee */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Temple Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Chief Priest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pandit Sharma has been serving as our chief priest for over 15 years,
                  bringing his extensive knowledge of Vedic scriptures and spiritual practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Astrologer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dr. Patel is our resident astrologer with expertise in Vedic astrology
                  and provides guidance to devotees seeking astrological consultations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spiritual Advisor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Swami Ji offers spiritual counseling and meditation guidance to help
                  devotees on their spiritual journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 