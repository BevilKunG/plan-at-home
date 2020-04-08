const express = require('express')
const router = express.Router()
const Plan = require('../../models/Plan')

router.get('/', (req, res) => {
    Plan.find({}, (error, plans) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(200).json({ plans })
    })
})

router.post('/', (req, res) => {
    const {name, date, activities} = req.body
    Plan.create({
        name,
        date,
        activities
    }, (error, plan) => {
        if(error) {
            res.status(500).json(error)
        }
        res.status(201).json({ plan })
    })
})

// untest
router.put('/:id', (req, res) => {
    const {name, date, activities} = req.body
    Plan.findByIdAndUpdate(req.params.id, {
        name,
        date,
        activities
    }, (error, plan) => {
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