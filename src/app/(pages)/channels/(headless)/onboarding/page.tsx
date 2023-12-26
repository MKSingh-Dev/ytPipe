import Typography from '~/components/atom/typography';
import { buttonVariants } from '~/components/ui/button';
import { MAIN_SITE } from '~/lib/config';

const OnboardingPage = () => (
    <div>
        <Typography variant="h4">You are not associated with any channel.</Typography>
        <Typography variant="small">
            Login with Google (YouTube) Account to manage your own channel else contact respective channel&apos;s admin to
            get invitation.
        </Typography>
        <a className={buttonVariants()} href={`${MAIN_SITE.authBaseUrl}/api/logout?callback=/channels/onboarding`}>
            Log in
        </a>
    </div>
);

export default OnboardingPage;
