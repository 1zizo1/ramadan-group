import CEOCard from '@/components/CEOCard'
import CEOSpotlight from '@/components/CEOSpotlight'
import COOCard from '@/components/COOCard'
import CTOCard from '@/components/CTOCard'
import GovernanceCompliance from '@/components/GovernanceCompliance'
import HeroLeadership from '@/components/HeroLeadership'
import Message from '@/components/ui/Message'
import React from 'react'

export default function Team() {
  return (
    <main>
        <HeroLeadership/>
        <CEOSpotlight/>
        <CEOCard/>
        <CTOCard/>
        <COOCard/>
        <GovernanceCompliance/>
        <Message/>
    </main>
  )
}
