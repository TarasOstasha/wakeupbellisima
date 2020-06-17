import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serviceInfo = [
    {
      h3: 'Lip Liner/Color',
      info: `The Intradermal Pigmentation procedure for lip color is beautiful.
      It can appear to change the size and shape of the lips as well as the color.
      This procedure helps prevent lipstick from bleeding into the surrounding skin.
      Many people request a soft pink, similar to the lip color to that of an infant,
      for those who want a natural look. Others may desire a dramatic effect.`,
      url: '../../../assets/imgs/1.jpg'
    },
    {
      h3: 'Eyebrows / Eyebrow & Hairline Strokes',
      info: `The Intradermal Pigmentation procedure for eyebrows can mimic the appearance
      of hair in the brow line. Anyone who desires more fullness of the brows will
      love the procedure (and the time saved not applying makeup!) Those who used
      to apply pencil can go swimming, play tennis, or wipe their forehead without
      the embarrassment of losing their eyebrows. Those suffering from alopecia
      (hair loss) are pleasantly surprised at how natural it looks.`,
      url: '../../../assets/imgs/eyebrows.jpg'
    },
    {
      h3: 'Eyeliner & Designer Eyeliner',
      info: `Eyeliner & Designer Eyeliner A subtle, natural look, mimicking thousands of tiny
      eyelashes with the implantation of pigments in the lash line is popular with both
      male and female clients. Additional shadowing of color can be added for a soft
      natural liner or a more bold, definite line can be achieved. Ophthalmologists
      recommend Intradermal Cosmetic procedures for those who are allergic to conventional
      makeup and for those wearing contact lenses.`,
      url: '../../../assets/imgs/3.jpg'
    },
    {
      h3: 'Additional Procedures:Eyelash Extensions',
      info: `Eyelash Extensions look like real lashes with a natural and weightless feel.
      These lashes are considered a “semi-permanent,” and are applied by attaching
      a synthetic eyelash to your natural eyelash. The application is painless;
      the final result is beautiful accented eyes! They are Great for swimming and workouts.
      Different lengths vary for everyday life or special occasions. No longer a need for mascara.
      Perfect for weddings, proms, reunions and everyday life!`,
      url: '../../../assets/imgs/5.jpg'
    },
    {
      h3: 'Mucosal Coloring',
      info: `Mucosal coloring is the art of adding color to the inner mucosal tissue just
      below the eye, a procedure that complements your eye’s natural sparkle.
      The coloring of the mucosal tissue adds depth and vibrance.`,
      url: '../../../assets/imgs/6.jpg'
    },
    {
      h3: 'Alopecia/Hairline',
      info: `Alopecia is the state of lacking hair where it usually would grow, especially on the head.
      Alopecia, which affects 50% of males known as a receding hairline/brow,
      many times is worsened due to stress and lack of sleep;
      it is also a common side-effect of face lifts.
      As far as permanent makeup is concerned with alopecia,
      we help straighten and fill in thinning hair regions along the hairline,
      sideburns, eyebrows, in small balding spots, etc.`,
      url: '../../../assets/imgs/10.jpg'
    },
    {
      h3: 'Lip Augmentation (non-surgical)',
      info: `This procedure is used to visually create fuller, healthier lips without any surgical procedure.
      Whether you are looking to balance out the shape of your lips, even-out a cleft lip,
      conceal burns or scars, or you simply want rich, sexy looking lips, this procedure is for you.`,
      url: '../../../assets/imgs/9.jpg'
    },
    {
      h3: 'Threading',
      info: `Growing in popularity across the country, threading is the process of shaping eyebrows using
      cotton thread.
      This delicate procedure is suitable for even the most sensitive skin types and is highly
      recommended as
      an excellent option instead of waxing or tweezing. Threading is becoming very popular because it
      is
      more precise and produces a beautiful uniform shape`,
      url: '../../../assets/imgs/7.jpg'
    },
    // {
    //   h3: 'Color Corrections',
    //   info: `Have you received a permanent cosmetic procedure you aren’t quite happy with?
    //   Our experienced technicians can fix color and shape mishaps. These corrections,
    //   while possible, can take time and may need multiple procedures.
    //   Contact me today for a consultation.`,
    //   url: ''
    // },
    // {
    //   h3: 'Lash Lift',
    //   info: `A Lash Lift is the ‘curling’ of the eyelashes, achieved 'using two treatments, one for lift, the
    //   other for color to attain a natural looking curl and lift of the lashes.
    //   The key benefits are more prominent, curled and defined lashes. This treatment is a fantastic
    //   alternative to the high maintenance that comes with lash extensions lasting up to around 8
    //   weeks.
    //   Lash lifting gives a marvelous result and a wow factor on par with extensions, but with greater
    //   longevity and much lower maintenance and expense.
    //   The lash lift and tint are the perfect combination for any woman wishing to replace the daily
    //   use of a handheld eyelash curler and mascara, with the stunning results lasting for 8-10 weeks.`,
    //   url: '../../../assets/imgs/9.jpg'
    // },
    // {
    //   h3: 'PhiRemoval',
    //   info: `Tattoo removal tool is used in a similar way as tattooing or micropigmenting.
    //   By using the same equipment, tattoo extraction formula starts working almost
    //   immediately after drawing the original tattoo ink, moving upwardly through the skin.
    //   The scab containing tattoo ink is formed on the treated area over the next few days.
    //   While healing, the skin extracts more and more undesired ink. Scab containing tattoo
    //   ink is formed over the treated area in the next few days. As the skin is healing,
    //   even more unwanted tattoo ink gets drawn out. It is very likely that another scab will form,
    //   which will contain even more ink. After the procedure and for as long
    //   as you have the scab on the skin, keep the treated area dry.
    //   Removal of the tattoo or bad PMU doesn’t end after one treatment.
    //   It takes more than one procedure to remove everything you are not satisfied with,
    //   but the first results are immediately visible. If only the epidermis is affected,
    //   usually there are no traces or scars because the base layer cells of the epidermis
    //   are able to regenerate completely.`,
    //   url: '../../../assets/imgs/10.jpg'
    // }
  ]
}
