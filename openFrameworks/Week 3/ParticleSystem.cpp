//
//  ParticleSystem.cpp
//  FirstParticleSystem
//
//  Created by Weili Shi on 11/3/16.
//
//

#include "ParticleSystem.hpp"

ParticleSystem::ParticleSystem(ofVec2f position) {
    
    mPosition = position;
    mEmitRate = 10;
    mIsAddingParticles = true;
    
}


void ParticleSystem::update(ofVec2f force) {
    
    if (mParticleList.size() < SIZE_LIMIT) {
        // push new particles into the vector
        for (int i = 0; i < mEmitRate; i++) {
            
            Particle newParticle(mPosition);
            mParticleList.push_back(newParticle);
            
        }
    }
    
    for (int i = 0; i < mParticleList.size(); i++) {
        
        if (mParticleList[i].mLifeSpan > 0) {
            
            // calculate the distance between center and particle position
            float distance = (mParticleList[i].mPosition - mPosition).length();
            
            mParticleList[i].resetForces();
            mParticleList[i].applyForce(force);
            float velocityMultiplier = ofMap(distance, 0, 200, 4, 1);
            mParticleList[i].update(velocityMultiplier);
            
        }
        
    }
    
}


void ParticleSystem::draw() {
    
    for (int i = 0; i < mParticleList.size(); i++) {
        
        mParticleList[i].draw();
        
    }
    
}
