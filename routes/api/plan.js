const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Plan = require('../../models/Plan')

router.get('/', auth, (req, res) => {
    Plan.find({ owner: req.user.id }, (error, plans) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(200).json({ plans })
    })
})

router.post('/', (req, res) => {
    Plan.create(req.body.plan, (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(201).json({ plan })
    })
})

router.put('/:id', (req, res) => {
    Plan.findByIdAndUpdate(req.params.id, req.body.plan, (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(200).json({ plan })
    })
})

router.delete('/:id', (req, res) => {
    Plan.findByIdAndDelete(req.params.id, (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(200).json({ plan })
    })
})

router.post('/:id/activities', async (req, res) => {
    const {activity} = req.body
    Plan.findById(req.params.id, async (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }

        const {activities} = plan
        plan.activities = [
            ...activities,
            activity
        ]
        const updatedPlan = await plan.save()
        res.status(200).json({ plan: updatedPlan })
    })
})

//
router.put('/:id/activities/:activityId', async (req, res) => {
    Plan.findById(req.params.id, async (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }

        plan.activities = plan.activities.map(activity => {
            if(activity._id !== req.params.activityId) {
                return activity
            }
            return req.body.activity
        })
        
        const updatedPlan = await plan.save()
        res.status(200).json({ plan: updatedPlan })
    })
})

router.delete('/:id/activities/:activityId', async (req, res) => {
    Plan.findById(req.params.id, async (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }

        plan.activities = plan.activities.filter(activity => activity._id !== req.params.activityId)
        const updatedPlan = await plan.save()
        res.status(200).json({ plan: updatedPlan })
    })
})
// router.post('/push', (req, res) => {
//     const plans = [
//         {
//             name: 'Today Plan',
//             date: Date.now(),
//             activities: [
//                 { name: 'read a book', duration: '06.00-07.00' },
//                 { name: 'do exercise', duration: '08.00-09.00' }
//             ]
//         },
//         {
//             name: 'Tomorrow Plan',
//             date: new Date(2020, 4, 6),
//             activities: [
//                 { name: 'read a book', duration: '06.00-07.00' },
//                 { name: 'do exercise', duration: '08.00-09.00' }
//             ]
//         },
//     ]
    
//     Plan.insertMany(plans, (error, doc) => {
//         if(error) {
//             res.status(500).json(error)
//         }
//         res.status(201).send('push success')
//     })
// })

module.exports = router