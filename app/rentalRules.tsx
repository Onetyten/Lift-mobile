import { View, Text, Image,ScrollView} from 'react-native'
import React,{useContext} from 'react'
import {AppContext,AppProvider} from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import RuleSnippet from './Components/RuleSnippet'



const rentalRules = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const {carListings,detailsIndex,darkMode} = context
  return (
    <View className={`flex-1 ${darkMode ? 'bg-slate-900' : 'bg-stone-100'}`}>
          <View className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-slate-900'}`}>
              <Text className='text-white text-center font-Ubuntubold text-2xl'>
                Rules
              </Text>
              <View className='mt-3 py-4 flex-row justify-between border-white rounded-xl mx-3' style={{borderWidth:1}}>
                <View className='ml-4 flex-row gap-2'>
                  <Image source={typeof carListings[detailsIndex].profilepic === 'string'? {uri: carListings[detailsIndex].profilepic}:carListings[detailsIndex].profilepic} width={80} height={80} resizeMode='cover' className='rounded-full '/>
                  <Text className='text-white text-xl font-Ubuntubold'>{carListings[detailsIndex].profileName}</Text>
                </View>
                <View className='mr-8 justify-around'>
                  <Text className='text-white text-md font-Ubunturegular'>{carListings[detailsIndex].state} , {carListings[detailsIndex].country}</Text>
                  <Text className='w-full text-md text-white font-Ubunturegular'>{carListings[detailsIndex].reviewStore} <FontAwesomeIcon icon={faStar} size={13} color='#ff934f'/></Text>

                </View>
              </View>
          </View>

        <ScrollView className='mx-4 pt-2'>
          <RuleSnippet Header = 'General Requirements' intro ='To rent a vehicle, renters must meet the following requirements:' rules={['Age Limit: Renters must be at least 21 years old (or comply with local age regulations). Additional age restrictions may apply for certain vehicle categories','Driver’s License: A valid driver’s license is mandatory. International renters may need to present an International Driving Permit (IDP) alongside their local license.','Payment Method: Renters must provide a valid credit or debit card at the time of booking. All payments are securely processed through the app.','Rental Duration: Rentals have minimum and maximum duration limits based on the vehicle type, clearly displayed during booking.']} />
          
          <RuleSnippet Header = 'Booking and Cancellations' intro ='Renters can book vehicles through the app, subject to the following policies:' rules={['Advance Booking: Reservations must be made at least 24 hours before the scheduled pickup time.','Cancellation Policy: Free cancellations are allowed up to 24 hours before the rental start time. Late cancellations or no-shows may incur a fee, which will be disclosed during booking.','Modification Policy: Changes to reservations, such as altering the pickup time or location, must be requested at least 10 hours in advance. Modifications are subject to availability.']} />

          <RuleSnippet Header = 'Vehicle Usage' intro ='Proper vehicle usage is critical to ensure safety and compliance:' rules={['Authorized Drivers: Only the renter and approved additional drivers listed in the rental agreement may operate the vehicle.','Mileage Limit: Each rental includes a specific mileage allowance (100 kilometers/miles per day). Any additional mileage will incur extra charges.','Fuel Policy: Vehicles should be returned with the same fuel level as at pickup. A refueling charge will apply if this condition is not met.','Prohibited Activities: Vehicles cannot be used for racing, towing, off-road driving, illegal activities, or transporting prohibited goods. Violations may result in penalties or termination of the rental agreement.']} />

          
          <RuleSnippet Header = 'Condition of the Vehicle' intro ='Renters are responsible for maintaining the vehicle during the rental period:' rules={['Inspection: Conduct an inspection during pickup to identify any existing damage. Report any discrepancies immediately to avoid liability.','Damage Responsibility: Renters are liable for any new damages that occur during the rental period.','Cleanliness: Vehicles must be returned in a clean state. Excessive dirt, stains, or odors (e.g., from smoking) may result in cleaning fees.']} />

          <RuleSnippet Header = 'Insurance and Liability' intro ='To protect renters and the company, insurance policies apply:' rules={['Basic Insurance: Basic insurance coverage is included with each rental. Renters may purchase additional coverage for enhanced protection.','Liability: Renters are responsible for any damages or losses not covered by insurance.','Security Deposit: A refundable security deposit may be required. This deposit will be returned after the vehicle is inspected and found in acceptable condition.']} />

          <RuleSnippet Header = 'Late Returns' intro ='Timely returns are crucial for efficient operations:' rules={['Grace Period: A grace period of 30 minutes is allowed for late returns','Late Fee: Rentals returned beyond the grace period will incur a late fee, calculated based on the extra time used.']} />
          <RuleSnippet Header = 'Emergency and Support' intro ='Our support team is available to assist renters during emergencies:' rules={['Breakdowns: Report any breakdowns to our 24/7 support line. Unauthorized repairs are not permitted and may result in additional charges.','Accidents: In the event of an accident, notify local authorities and our team immediately. A police report may be required for insurance claims']} />
          <RuleSnippet Header = 'Penalties and Fees' intro ='To maintain a fair rental experience, the following penalties apply:' rules={['Smoking Fee: Smoking in vehicles is strictly prohibited. Violations will result in a cleaning fee.','Traffic Violations: Renters are responsible for any traffic fines or penalties incurred during the rental period.','Key Loss: A fee will be charged for lost or damaged keys.']} />
          <RuleSnippet Header = 'Termination of Rental' intro ='The company reserves the right to terminate the rental agreement under the following conditions:' rules={['If the renter violates any terms and conditions outlined in the agreement.','If the renter exhibits unsafe or inappropriate behavior that jeopardizes the vehicle or others on the road.',]} />
          <RuleSnippet Header = 'Privacy and Data Protection' intro ='We prioritize your privacy and ensure data security:' rules={['Personal information is collected and used in compliance with our privacy policy and applicable data protection laws.','All transactions and communications within the app are securely encrypted.']} />
        </ScrollView>
        
    </View>
  )
}

export default rentalRules