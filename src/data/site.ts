import type { Hotspot, NavLink, Scene, Segment, Solution, TextItem } from '../types/content';
import { images } from './images';

export const company = {
  name: 'AIIVA Automation Private Limited',
  shortName: 'AIIVA Automation',
  tagline: 'Smart and Affordable',
  statement: ['Smart Living.', 'Simple Automation.', 'Affordable Technology.'],
  intro:
  'AIIVA Automation is a Hyderabad-based home and building automation company providing smart, reliable and affordable automation solutions for homes, apartments, villas, offices and commercial spaces.',
  offer:
  'We offer solutions for lighting, curtains, climate control, security, access control, smart switches, sensors and complete home automation — designed to make everyday living more comfortable, secure and energy-efficient.',
  focus: ['Quality Products', 'Professional Installation', 'Seamless Integration', 'Value-for-Money Automation'],
  focusStatement: 'Quality products, professional installation, seamless integration and value-for-money automation.',
  closing: 'AIIVA Automation — Making Smart Living Accessible to Everyone.'
};

export const contact = {
  address: ['#504, The Legend,', 'Palace Colony,', 'Basheer Bagh,', 'Hyderabad - 500063'],
  phones: ['9000006000', '9704300006'],
  whatsapp: '9000006000',
  email: 'AIIVAAUTOMATION@GMAIL.COM',
  hours: '9 AM – 7 PM',
  // Leave empty until the accounts exist — empty links are never rendered.
  social: [] as NavLink[]
};

export const primaryNav: NavLink[] = [
{ label: 'Home', href: '#top' },
{ label: 'Solutions', href: '#solutions' },
{ label: 'Products', href: '#products' },
{ label: 'How It Works', href: '#how-it-works' },
{ label: 'About', href: '#about' }];


export const footerNav: NavLink[] = [
{ label: 'Home', href: '#top' },
{ label: 'About', href: '#about' },
{ label: 'Solutions', href: '#solutions' },
{ label: 'Products', href: '#products' },
{ label: 'How It Works', href: '#how-it-works' },
{ label: 'Contact', href: '#contact' }];


export const capabilities = [
'Smart Home',
'Building Automation',
'Lighting',
'Curtains',
'Climate',
'Security & Access',
'IoT',
'Energy'];


export const hotspots: Hotspot[] = [
{ id: 'entry', room: 'Entry', system: 'Access Control', description: 'Connected access at the front door, so you always know who is coming in.', x: 9, y: 52 },
{ id: 'media', room: 'Media Room', system: 'Entertainment', description: 'Lights, curtains and screen working together for the perfect viewing setup.', x: 27, y: 46 },
{ id: 'living', room: 'Living Room', system: 'Smart Lighting', description: 'Layered lighting for comfort, ambience and energy efficiency.', x: 50, y: 62 },
{ id: 'windows', room: 'Windows', system: 'Curtain Automation', description: 'Motorized curtains that open and close with scenes and routines.', x: 80, y: 55 },
{ id: 'bedroom', room: 'Bedroom', system: 'Climate Control', description: 'Intelligent temperature and comfort management for restful sleep.', x: 76, y: 22 },
{ id: 'whole', room: 'Whole Home', system: 'Smart Switches & Sensors', description: 'Modern physical controls and sensors connecting every space.', x: 52, y: 30 }];


export const solutions: Solution[] = [
{ title: 'Smart Lighting', description: 'Automated lighting for comfort, ambience and energy efficiency.', image: images.lighting },
{ title: 'Curtain Automation', description: 'Motorized curtains and blinds controlled through scenes and routines.', image: images.curtains },
{ title: 'Security & Access', description: 'Connected access and smart security solutions.', image: images.security },
{ title: 'Climate Control', description: 'Intelligent temperature and comfort management.', image: images.climate },
{ title: 'Building Automation', description: 'Automation solutions for offices and commercial spaces.', image: images.building },
{ title: 'Smart Switches & Sensors', description: 'Modern physical controls and sensors for connected spaces.' },
{ title: 'Energy Management', description: 'Solutions designed to help monitor and manage energy usage.' },
{ title: 'IoT Solutions', description: 'Connected devices and intelligent control.' }];


export const steps: TextItem[] = [
{ title: 'Understand', description: 'Understand your space, lifestyle and requirements.' },
{ title: 'Design', description: 'Design an automation solution around the property.' },
{ title: 'Install', description: 'Professionally install and integrate the systems.' },
{ title: 'Experience', description: 'Enjoy smarter, safer and more comfortable living.' }];


export const scenes: Scene[] = [
{ id: 'morning', title: 'Good Morning', actions: ['Curtains open', 'Lights brighten', 'Climate adjusts'], image: images.bedroom, filter: 'brightness(1.05) saturate(1.05)' },
{ id: 'leaving', title: 'Leaving Home', actions: ['Lights switch off', 'Climate enters energy mode', 'Security activates'], image: images.hero, filter: 'brightness(0.82) saturate(0.8)' },
{ id: 'movie', title: 'Movie Night', actions: ['Lights dim', 'Curtains close', 'Entertainment starts'], image: images.heroEvening, filter: 'brightness(0.95)' },
{ id: 'night', title: 'Good Night', actions: ['Lights turn off', 'Doors lock', 'Security activates'], image: images.bedroom, filter: 'brightness(0.45) saturate(0.7)' }];


export const segments: Segment[] = [
{ title: 'Residential', items: ['Homes', 'Apartments', 'Villas', 'New Construction', 'Retrofit'], image: images.residential },
{ title: 'Commercial', items: ['Offices', 'Commercial Buildings', 'Workspaces', 'Building Automation'], image: images.commercial }];


export const buildTypes = [
{ title: 'New Construction', description: 'Design automation into the project from the beginning.', image: images.newConstruction },
{ title: 'Retrofit', description: 'Upgrade existing homes and spaces with smart automation.', image: images.retrofit }];


export const whyWords = ['Smart', 'Reliable', 'Affordable', 'Customized', 'Professionally Installed'];

export const projectTypes = ['Home', 'Apartment', 'Villa', 'Office', 'Commercial Building', 'New Construction', 'Retrofit', 'Other'];