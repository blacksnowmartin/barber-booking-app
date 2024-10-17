'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  useToast,
  Link,
} from '@chakra-ui/react'

// Mock function to simulate M-Pesa payment
const simulateMpesaPayment = async (phoneNumber: string, amount: number) => {
  // In a real scenario, this would integrate with the M-Pesa API
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
  return { success: true, transactionId: 'MP' + Math.random().toString(36).substr(2, 9) }
}

export default function BookingForm() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate M-Pesa payment
      const paymentResult = await simulateMpesaPayment(phoneNumber, 1000) // Assume 1000 is the price

      if (paymentResult.success) {
        toast({
          title: "Booking Successful!",
          description: `Your appointment is confirmed. Transaction ID: ${paymentResult.transactionId}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        // Here you would typically save the booking to your database
      } else {
        toast({
          title: "Booking Failed",
          description: "There was an error processing your payment. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container maxW="container.xl" centerContent>
      <VStack spacing={8} py={16}>
        <Heading as="h1" size="2xl">Book Your Appointment</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="phoneNumber">Phone Number (for M-Pesa)</FormLabel>
              <Input
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="service">Service</FormLabel>
              <Select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Select a service"
              >
                <option value="haircut">Haircut</option>
                <option value="shave">Shave</option>
                <option value="haircut-and-shave">Haircut & Shave</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              mt={4}
              isLoading={isLoading}
              loadingText="Processing..."
            >
              Book and Pay with M-Pesa
            </Button>
          </VStack>
        </form>
        <Button as={Link} href="/" variant="outline" colorScheme="blue">
          Back to Home
        </Button>
      </VStack>
    </Container>
  )
}
