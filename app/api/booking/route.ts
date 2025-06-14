
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      address, 
      city, 
      postalCode,
      services,
      message,
      preferredDate,
      preferredTime,
      propertyType,
      estimatedSize,
      urgency
    } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Convert preferredDate string to Date object if provided
    let preferredDateObj = null
    if (preferredDate) {
      preferredDateObj = new Date(preferredDate)
    }

    // Save to database
    const bookingRequest = await prisma.bookingRequest.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        postalCode: postalCode || null,
        services,
        message: message || null,
        preferredDate: preferredDateObj,
        preferredTime: preferredTime || null,
        propertyType: propertyType || null,
        estimatedSize: estimatedSize || null,
        urgency: urgency || 'standard',
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        message: 'Booking request saved successfully',
        id: bookingRequest.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving booking request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
