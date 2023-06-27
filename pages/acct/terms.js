import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function terms({ }) {
  
  return (
    <>
      <Header title="Dashboard" />
        <div class="main">
          
          <Container maxWidth="sm">
            <Box sx={{ flexGrow: 1 }} className="grid-mt">
              <Typography>
                Terms of Service for Planet Trader
                <br></br>
                <br></br>
                
                1. Acceptance of Terms

                By accessing or using the Planet Trader (referred to as "the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the Service.
                <br></br>
                <br></br>
                2. Description of the Service

                The Service allows users to engage in virtual planet trading and selling activities for entertainment purposes only. The trading and selling are simulated, and no real money transactions are involved. The Service operates using a fake currency system for fun and enjoyment.
                <br></br>
                <br></br>
                3. User Conduct

                You agree to use the Service in compliance with applicable laws and regulations. When using the Service, you agree not to:
                - Engage in any unlawful, fraudulent, or deceptive activities.
                - Impersonate or misrepresent your identity or affiliation with any person or entity.
                - Harass, threaten, or harm other users or individuals.
                - Upload, post, or transmit any content that is illegal, obscene, defamatory, or violates the rights of others.
                - Attempt to gain unauthorized access to the Service or interfere with its proper functioning.
                - Use Service in any way that could damage, disable, or impair its infrastructure or the experience of other users.
                <br></br>
                <br></br>
                4. Intellectual Property Rights

                The Service and its original content, features, and functionality are owned by the service provider and protected by intellectual property laws. You may not modify, reproduce, distribute, or create derivative works of any part of the Service without explicit permission from the service provider.
                <br></br>
                <br></br>
                5. Disclaimer of Warranty

                The Service is provided on an "as-is" and "as available" basis. The service provider does not guarantee the accuracy, reliability, or suitability of the Service for any particular purpose. The use of the Service is at your own risk, and the service provider shall not be liable for any damages resulting from your use of the Service.
                <br></br>
                <br></br>
                6. Limitation of Liability

                To the maximum extent permitted by law, the service provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the Service, even if the service provider has been advised of the possibility of such damages.
                <br></br>
                <br></br>
                7. Modifications to the Service

                The service provider reserves the right to modify or discontinue the Service at any time without prior notice. They may also update these Terms of Service from time to time. It is your responsibility to review the Terms regularly to stay informed of any changes.
                <br></br>
                <br></br>
                8. Governing Law

                These Terms of Service shall be governed by and construed in accordance with the laws of BGM Clark County, WA. Any dispute arising from or relating to the Service shall be subject to the exclusive jurisdiction of the courts in BGM Clark County, WA.
                <br></br>
                <br></br>
                9. Severability

                If any provision of these Terms of Service is held to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                <br></br>
                <br></br>
                10. Entire Agreement

                These Terms of Service constitute the entire agreement between you and the service provider regarding the use of the Service and supersede any prior agreements or understandings.
                <br></br>
                <br></br>
                </Typography>
            </Box>
          </Container>
        </div>
      <Footer />   
    </>
  );
}

