/**
 * TODO: Dynamic import
 */
//Import library and DOM watcher from core package
import { library, dom } from '@fortawesome/fontawesome-svg-core'

/**
 * Setup required icons here in camel case, separated by packages
 * Choose only needed icons/packages
 */
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTelegram,
    faTwitter,
    faYoutube,
    faGooglePlay,
} from '@fortawesome/free-brands-svg-icons'

import {
    faQuoteRight as          faQuoteRightSolid,
    faQuoteLeft as           faQuoteLeftSolid,
    faHome as                faHomeSolid,
    faAngleLeft as           faAngleLeftSolid,
    faAngleRight as          faAngleRightSolid,
    faAngleDoubleLeft as     faAngleDoubleLeftSolid,
    faAngleDoubleRight as    faAngleDoubleRightSolid,
    faAngleDoubleUp as       faAngleDoubleUpSolid,
    faAngleDoubleDown as     faAngleDoubleDownSolid,
    faArrowLeft as           faArrowLeftSolid,
    faArrowRight as          faArrowRightSolid,
    faChevronLeft as         faChevronLeftSolid,
    faChevronRight as        faChevronRightSolid,

    faBars as                faBarsSolid,
    faExclamationTriangle as faExclamationTriangleSolid,
    faMapMarkerAlt as        faMapMarkerAltSolid,
    faReply as               faReplySolid,
    faRss as                 faRssSolid,
    faSearch as              faSearchSolid,
    faSignInAlt as           faSignInAltSolid,
    faTimes as               faTimesSolid,
    faPhone as               faPhoneSolid,
} from '@fortawesome/free-solid-svg-icons' //change this to @fortawesome/pro-solid-svg-icons if needed

import {
    faCalendarAlt as         faCalendarAltRegular,
    faComment as             faCommentRegular,
    faEdit as                faEditRegular,
    faEnvelope as            faEnvelopeRegular,
    faEye as                 faEyeRegular,
    faSmile as               faSmileRegular,
    faUser as                faUserRegular,
    faClock as               faClockRegular,
} from '@fortawesome/free-regular-svg-icons' //change this to @fortawesome/pro-regular-svg-icons if needed

// //Uncomment this import statement if you have PRO license and want to use light styles
// import {
//     faChevronLeft as faChevronLeftLight,
//     faChevronRight as faChevronRightLight
// } from '@fortawesome/pro-light-svg-icons'

/**
 * Then include selected above icons in the library
 */
library.add(
    faFacebook,
    faInstagram,
    faLinkedin,
    faTelegram,
    faTwitter,
    faYoutube,
    faGooglePlay,

    faAngleLeftSolid,
    faAngleRightSolid,
    faAngleDoubleLeftSolid,
    faAngleDoubleRightSolid,
    faAngleDoubleUpSolid,
    faAngleDoubleDownSolid,
    faArrowLeftSolid,
    faArrowRightSolid,
    faChevronLeftSolid,
    faChevronRightSolid,

    faBarsSolid,
    faExclamationTriangleSolid,
    faMapMarkerAltSolid,
    faReplySolid,
    faRssSolid,
    faSearchSolid,
    faSignInAltSolid,
    faTimesSolid,
    faPhoneSolid,

    faQuoteRightSolid,
    faQuoteLeftSolid,
    faHomeSolid,

    faCalendarAltRegular,
    faCommentRegular,
    faEditRegular,
    faEnvelopeRegular,
    faEyeRegular,
    faSmileRegular,
    faUserRegular,
    faClockRegular,
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()

/**
 * All done! Type
 * npm run build
 * in the terminal and grab your bundle from dist folder
 */