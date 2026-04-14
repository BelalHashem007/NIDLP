
import FooterBrand from './components/FooterBrand';
import FooterLinks from './components/FooterLinks';
import FooterContact from './components/FooterContact';


function Footer() {
  return (
   <div className='pt-5 pb-20 lg:pl-20 px-10 lg:px-0 flex flex-col lg:flex-row bg-[#19043A] text-white'>

    {/* القسم الأول */}
    <FooterBrand />

    {/* القسم التاني */}
    <FooterLinks />

    {/* القسم الثالث */}
    <FooterContact />
    
</div>
    
  )
}

export default Footer
