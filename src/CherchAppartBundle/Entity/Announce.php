<?php

namespace CherchAppartBundle\Entity;

/**
 * Announce
 */
class Announce
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /**
     * @var \DateTime
     */
    private $dateOfPosting;

    /**
     * @var boolean
     */
    private $isPremium;

    /**
     * @var \DateTime
     */
    private $endOfPublication;

    /**
     * @var \CherchAppartBundle\Entity\Announce_Informations
     */
    private $announce_informations;

    /**
     * @var \CherchAppartBundle\Entity\User
     */
    private $user;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Announce
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set dateOfPosting
     *
     * @param \DateTime $dateOfPosting
     *
     * @return Announce
     */
    public function setDateOfPosting($dateOfPosting)
    {
        $this->dateOfPosting = $dateOfPosting;

        return $this;
    }

    /**
     * Get dateOfPosting
     *
     * @return \DateTime
     */
    public function getDateOfPosting()
    {
        return $this->dateOfPosting;
    }

    /**
     * Set isPremium
     *
     * @param boolean $isPremium
     *
     * @return Announce
     */
    public function setIsPremium($isPremium)
    {
        $this->isPremium = $isPremium;

        return $this;
    }

    /**
     * Get isPremium
     *
     * @return boolean
     */
    public function getIsPremium()
    {
        return $this->isPremium;
    }

    /**
     * Set endOfPublication
     *
     * @param \DateTime $endOfPublication
     *
     * @return Announce
     */
    public function setEndOfPublication($endOfPublication)
    {
        $this->endOfPublication = $endOfPublication;

        return $this;
    }

    /**
     * Get endOfPublication
     *
     * @return \DateTime
     */
    public function getEndOfPublication()
    {
        return $this->endOfPublication;
    }

    /**
     * Set announceInformations
     *
     * @param \CherchAppartBundle\Entity\Announce_Informations $announceInformations
     *
     * @return Announce
     */
    public function setAnnounceInformations(\CherchAppartBundle\Entity\Announce_Informations $announceInformations = null)
    {
        $this->announce_informations = $announceInformations;

        return $this;
    }

    /**
     * Get announceInformations
     *
     * @return \CherchAppartBundle\Entity\Announce_Informations
     */
    public function getAnnounceInformations()
    {
        return $this->announce_informations;
    }

    /**
     * Set user
     *
     * @param \CherchAppartBundle\Entity\User $user
     *
     * @return Announce
     */
    public function setUser(\CherchAppartBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \CherchAppartBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $comments;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comments = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add comment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $comment
     *
     * @return Announce
     */
    public function addComment(\CherchAppartBundle\Entity\Announce_Comments $comment)
    {
        $this->comments[] = $comment;

        return $this;
    }

    /**
     * Remove comment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $comment
     */
    public function removeComment(\CherchAppartBundle\Entity\Announce_Comments $comment)
    {
        $this->comments->removeElement($comment);
    }

    /**
     * Get comments
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComments()
    {
        return $this->comments;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $announce_comments;


    /**
     * Add announceComment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $announceComment
     *
     * @return Announce
     */
    public function addAnnounceComment(\CherchAppartBundle\Entity\Announce_Comments $announceComment)
    {
        $this->announce_comments[] = $announceComment;

        return $this;
    }

    /**
     * Remove announceComment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $announceComment
     */
    public function removeAnnounceComment(\CherchAppartBundle\Entity\Announce_Comments $announceComment)
    {
        $this->announce_comments->removeElement($announceComment);
    }

    /**
     * Get announceComments
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnounceComments()
    {
        return $this->announce_comments;
    }
}
