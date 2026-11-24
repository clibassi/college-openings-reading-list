# Bleemer & Quincy (2026)

> Model-written summary (2026-11-24) of the paper's PDF: working paper dated June 2026 (file name says Jan2026), 97 pages including appendix, title "Junior Colleges and Local Development". Not checked against the paper by a person.

## File Name
BleemerQuincy_JuniorCollegesLocalDevelopment_2026.pdf

## Paper Title
Junior Colleges and Local Development

## Basic Information
- Authors: Zachary Bleemer (Princeton University & NBER) and Sarah Quincy (Vanderbilt University & NBER)
- Year: 2026 (working paper dated June 2026)
- Journal: Not reported in this version (working paper; JEL I23, J24, N32, O15, R11)
- Field: Economics
- Subfield: Economic history; economics of education; regional development and structural change
- Study type: Observational quasi-experimental study; staggered difference-in-differences on linked individual census data and town- and county-year panels, around about 300 junior college openings (1910s–1920s)

## Objective and Contribution (100-150 words)
The paper asks how local human capital affects regional productivity and spatial structural transformation. It studies the first wave of American two-year "junior" colleges, using the timing and location of every opening between 1900 and 1950 (p. 2). It makes three claims: (i) openings raised local college-going and moved men into skilled farm and clerical work; (ii) openings raised county farm value per acre and farm wages by roughly 5–6 percent for decades; (iii) workers in other towns of the same county moved out of farming into skilled non-farm jobs, with noisier manufacturing gains and no patenting response (pp. 2–4). The contribution is a long-run local general equilibrium estimate of what a community college opening does, including spillovers to people who never enroll. Earlier work mostly estimated average effects on students (p. 5). The authors stress technology adoption, not invention, as the channel (p. 5).

## Methodology (200-300 words)
**Data.** Junior college openings come from 1931–1956 directories and two federal studies (p. 10). Individual outcomes come from linking childhood town in the 1900–1930 full-count censuses to the 1940 census via Census Tree crosswalks (p. 12). County outcomes come from the Censuses of Agriculture (farm value per acre) and Manufactures (value added and wages per production worker) (pp. 12–13).

**Design.** Individual level, cross-cohort difference-in-differences (p. 13):

$$Y_{ic}=\sum_{t=8}^{38}\beta_t\,\mathbf{1}\{c+t=JC_{town_i}\}+\alpha_{town_i}+\delta_{state_i,c}+\epsilon_{ic}$$

where $Y_{ic}$ is a 1940 outcome for person $i$ of birth cohort $c$, $\beta_t$ is the effect of being $t$ years old when the town's first junior college opens, $\alpha$ are town fixed effects and $\delta$ are state-by-cohort fixed effects. Town and county level (p. 19):

$$Y_{pd}=\sum_{t\in T}\gamma_t\,\mathbf{1}\{d-t=JC_p\}+\zeta_p+\eta_{state_p,d}+\epsilon_{pd}$$

where $p$ is a town or county, $d$ the census year, $\gamma_t$ the effect $t$ years after opening, $\zeta$ place fixed effects and $\eta$ state-by-year fixed effects.

**Identifying assumption.** Treated places would have followed the same trajectory as other places in the same state absent the college (pp. 3–4, 19).

**Estimation.** Age 28 is the omitted cohort and ages 19–27 are a phase-in period (p. 14). Events are 1912–1928 openings (individual) and 1910–1928 (county) (pp. 13, 19). Towns 2–5 miles away are dropped, towns below the 10th percentile of treated-town population are dropped, and observations are reweighted so each town-cohort has equal weight (pp. 13–15, 20). Farm value per acre is estimated separately for 1910s and 1920s openings because the census years are irregular (p. 20). A pre-trend extrapolation ("pencil") test replaces the pre-period dummies with a linear trend (p. 14).

**Inference.** Standard errors are clustered by town in the individual data and by county in county panels (p. 14; Fig. 4 note, p. 39).

**Threats.** Endogenous siting, local SUTVA violations, staggered-timing bias, linking selection and unobserved shocks (pp. 14–15, 26–27).

## Sample and Setting (150-200 words)
The setting is the early-1900s United States. Junior colleges opened in over 400 towns between 1910 and 1930, and enrollment rose from under 10,000 to nearly 100,000 (p. 8). About two-thirds of 1931 students were in public institutions, about half were tuition-free, and the median college enrolled about 173 students (pp. 8–9). Most operated out of existing high schools (p. 8). The median college was over 80 miles from the state land-grant university (p. 7).

The individual sample has 9,159,404 men and 5,464,158 women, aged 22 to 58, from 12,765 childhood towns, 302 of which opened a junior college in 1912–1928. It covers 1882–1920 birth cohorts (pp. 13–14). Treated towns were larger than average. In 1920 the population row reads 43,148 for towns with a junior college and 2,128 for all towns, and farmers were 12.1% versus 49.6% of male employment (Table 1, p. 44). The county-level approach yields 338 events among 3,105 counties; the mean treated town held a quarter of its county's population (p. 19, fn. 34). Pooled farm and wage samples include 303 events after the population cutoff (Fig. 4 note, p. 39). Linked records are positively selected (Table BB-1, p. 49).

## Main Findings (200-300 words)
**Education.** Junior college access raised college enrollment by 3.1 percentage points for men and 1.7 for women (Fig. 2a, p. 37). Four-year attainment rose 1.7 points for men and 0.3 for women, and high school graduation did not change (Fig. 2b, 2d, p. 37).

**Occupations.** Men became 1.9 points more likely to be farmers and 1.6 points less likely to be farm laborers, with no net change in farm employment. They also became 1.4 points more likely to hold clerical or sales jobs (Fig. 3, p. 38). Among men, manager and proprietor employment fell by 1.0 point (p. 17).

**Farm productivity.** County log farm value per acre rose by 0.052 (0.022) pooled, 0.055 (0.040) for 1910s openings and 0.050 (0.027) for 1920s openings (Fig. 4, p. 39). Log farm labor expenditure per worker rose by 0.062 (0.022) (Fig. 8a, p. 42). Corn yields rose 2.91 (1.53) log points times 100 while wheat did not, −0.93 (1.58) (Fig. 7, p. 41).

**Mechanisms.** The county share of prime-age men with college rose 0.5 points (0.2), but the farmer college share rose only 0.3 (0.3) at county level (Fig. 5, p. 40). Gains were larger for public colleges and those with agricultural or business programs (Table 2, p. 45). Treated towns gained farm employment (Farm sector 1.7 (0.7)) while nearby towns lost it (−2.4 (0.5)) (Fig. 8b, p. 42).

**Non-farm.** Manufacturing value added per worker and wages per production worker each rose 0.027, with standard errors 0.017 and 0.016 (Fig. 9, p. 43). The county white-collar share rose 0.5 points (0.2) (Fig. 9d, p. 43). Patenting did not respond: pooled −0.6 (0.8) (Fig. A-24, p. 74).

## Key Figures and Tables
**Figure 2 — Effect of junior college on college education.** Event-study coefficients by age at opening for four outcomes, men and women separately. The main figure for first-stage take-up: estimates are near zero for cohorts over 28 and rise for those 18 or younger (Men 3.1 (0.4), Women 1.7 (0.4) for enrollment) (p. 37).

**Figure 4 — Effect of junior college openings on local farm value per acre.** County event study for 1910s and 1920s openings. Estimates of 0.055 (0.040) and 0.050 (0.027) have similar size across decades, and the pre-period coefficients are flat. This is the headline productivity result (p. 39).

**Figure 5 — Effect of junior college openings on local human capital.** College-educated share of prime-age men and of male farmers, for treated towns, nearby towns and the county. County farmer college share moves little (0.3 (0.3)), which the authors use to argue that direct farmer human capital cannot explain the 5.4% rise (p. 40).

**Figure 7 — Crop yield effects of junior college openings.** Corn (innovation-intensive) versus wheat (placebo) yields. Corn rises 2.91 (1.53); wheat is −0.93 (1.58). This is the main evidence for technology adoption, and the corn estimate is only marginally significant (p. 41).

**Figure 8 — Effect of junior college openings on local farming labor markets.** Farm wages and town-level farm, farmer and laborer employment shares. Treated towns concentrate farming (Farmer 2.1 (0.6)) while nearby towns exit (−2.0 (0.4)). This is the spatial reallocation evidence (p. 42).

**Figure 9 — Effect of junior college openings on local non-farm outcomes.** The only manufacturing results. Panels (a) and (b) use 1920s openings only, give 0.027 (0.017) and 0.027 (0.016), and are not significant at 5 percent (p. 43).

**Table 2 — Junior college characteristics, college enrollment, and farm productivity.** Splits enrollment and farm value effects by public control, agriculture/business programs, distance to land-grant, non-degree students and separate campus. Farm value effects are larger for public colleges (9.89 (4.07) versus 2.60 (2.53)), but equality p-values are 0.08–0.20 (p. 45).

**Figure A-24 — Effect of junior college openings on county patenting.** Outcome is log of one plus county resident inventor patents per 100,000 population, with the source line citing Petralia and coauthors (2016). Estimates are 1910s 1.4 (1.3), 1920s −1.5 (0.9), pooled −0.6 (0.8) (p. 74).

**Table A-11 — Junior college effects on innovative occupational outcomes by sector.** "New occupations" and "knowledge intensive jobs" (scientists and engineers) for men and women. Men's knowledge-intensive share rises 0.18 (0.10) overall and 0.19 (0.06) in manufacturing, from means of 1.2 and 0.5 (p. 85).

**Table A-17 — County balance on other development indicators.** Regressions of electricity, market access, banking and experiment-station indicators on a junior college indicator. All coefficients are insignificant (e.g. electricity access −2.06 (3.25)). This is the main check on concurrent development (p. 91).

## Critical Analysis (300-400 words)
The individual-level first stage is the most credible part of the paper. The cohort design uses town and state-by-cohort fixed effects, event-study pre-coefficients are near zero, and the results survive a stacked estimator, donut, alternative linking, and restriction to towns with high schools (pp. 15–17). Even so, several pre-trend tests are not clean: male four-year attainment has a joint F p-value of 0.04, and the spline p-values are 0.00 for most outcomes in Table A-3 (p. 56). The authors discuss some of these (p. 16, fn. 26).

The county productivity results are causal in intent but identification is weaker. Treatment is the first junior college anywhere in the county, which is not randomly sited: treated places are larger, more educated and less commodity-oriented (Table 1, Table A-1, pp. 44, 54). Spline tests for farm wages give p = 0.01 and 0.02 (Table A-5, p. 79). Table 2 Panel B splits are imprecise, and splitting by decade leaves few events per estimate. The mechanism claims (knowledge diffusion, corn yields) are suggestive: corn's estimate has a ratio of about 1.9 to its standard error in Fig. 7 and no direct adoption measure exists (pp. 23–24). The text and appendix also disagree in places: the text says farm effects are concentrated in the Midwest and West, while Table A-24 notes largest effects in the South and West (pp. 27, 97).

On the points closest to a firm and industry project:

- Manufacturing is the weakest result. It uses 1920s openings only, a single pre-period wage observation (1900), and value added from 1920 and 1927–1939 (pp. 25–26). Both estimates have t-statistics of 1.6–1.7, so the paper's own wording is "noisily rise" (p. 26). The data section says value added is observable from 1910 (p. 13), but Section 5.3 says only 1920 and biennial 1927–1939 (p. 25); this is not reconciled.
- There is no firm-level, establishment-count, capital or service-sector outcome (p. 25, fn. 48).
- Industry-mix evidence is occupational, not industrial: men's manufacturing white-collar share rises 0.63 (0.16) in the individual data (Table A-12, p. 86), and food manufacturing share rises 0.4 (0.1) in treated towns (Fig. A-8f, p. 61).
- The patent null (−0.6 (0.8)) is a county-resident-inventor count, with no pre-period diagnostics reported in Table A-5 (p. 79), and the confidence interval is wide relative to plausible effects. It should be read as no detectable change, not as a precise zero.
-

## Research Gaps and Future Directions
The authors call for studies of individual and local gains from two-year colleges in other settings, and for a structural model to assess the social benefits of educational expansion (p. 30). They do not obtain individual earnings returns because farm and proprietor income is not recorded (p. 18). Service-sector output and manufacturing capital cannot be measured (p. 25, fn. 48). The paper does not test spillover channels other than farming, and it does not identify which farmers adopted which techniques (p. 24, fn. 47).

## Implications and Future Research (100-150 words)
For a project on community or technical college openings and local firms, industry mix and innovation, the design transfers well: a staggered-opening event study with place and state-year fixed effects, a two-to-five mile donut, a stacked estimator, a pre-trend extrapolation test, and separate "treated" and "nearby" estimates to detect reallocation within a labor market. The data do not transfer: the paper has no firm microdata, only county manufacturing aggregates for 1920s openings, and a patent measure with imprecise estimates. The estimate sizes are specific to a rural, agricultural setting with 1910s–1920s two-year colleges that were mostly in high-school buildings; modern vocational programs and employer links may behave differently. A modern project should add pre-period firm data, establishment counts, industry-specific outcomes and a power calculation for patents.

## Keywords/Tags
#community-colleges #junior-colleges #human-capital #structural-transformation #staggered-difference-in-differences #agricultural-productivity #technology-adoption #economic-history #place-based-policy #jel-i23

## Related Papers
[[Andrews (2023)]] Closest design on college establishment and local invention; useful contrast with the null patent response here.
[[Andrews & Smith (2025)]] Cited by this paper on land-grant colleges and the direction of science; relevant to the agricultural-knowledge channel.
[[Howard, Weinstein, & Yang (2024)]] Cited by this paper on universities and local economic resilience; another historical college-opening design with long-run local outcomes.
[[Liu (2015)]] Cited by this paper on spillovers from land-grant colleges; a comparison for local productivity effects of college presence.
[[Miller (2025)]] Texas community college openings; modern analogue to the junior college openings studied here (not cited by this paper).
